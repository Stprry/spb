import { currentUser, pb } from '$lib/pocketbase';

pb.authStore.loadFromCookie(document.cookie);

pb.authStore.onChange(() => {
	currentUser.set(pb.authStore.model);

	// set cookie, htpp only to false so front end and backend can access
	document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
});
