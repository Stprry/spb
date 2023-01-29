import type { Handle } from '@sveltejs/kit';
import { pb } from './lib/pocketbase';

export const handle: Handle = async ({ event, resolve }) => {
	// get cookie
	pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	// check if valid
	if (pb.authStore.isValid) {
		try {
			await pb.collection('users').authRefresh();
		} catch (_) {
			pb.authStore.clear();
		}
	}
	event.locals.pb = pb;
	// run structured clone to convert to plain js object.
	event.locals.user = structuredClone(pb.authStore.model);

	const response = await resolve(event);
	// once event resolved.

	// set the cookie, set hhtp only false so bfront end can read cookie.
	response.headers.set('set-cookie', pb.authStore.exportToCookie({ httpOnly: false }));

	return response;
};
