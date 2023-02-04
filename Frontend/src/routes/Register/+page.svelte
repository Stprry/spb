<script lang="ts">
	import { applyAction, enhance } from "$app/forms";
  import { pb } from "$lib/pocketbase";


</script>
<div class="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8  rounded-lg min-h-full">
  <h1 class="font-bold font-mono mt-2">Register</h1>
  <small>Sign Up to access the free workout planning app.</small>
    <form class="mb-8 space-y-6 w-full lg:w-6/12" action="#" method="POST" use:enhance={() => {
      return async ({ result }) => {
        pb.authStore.loadFromCookie(document.cookie);
        await applyAction(result);
      }
    }}>
      <input type="hidden" name="remember" value="true">
      <div class="space-y-2 rounded-md shadow-sm">
        
          <input id="firstName" name="firstName" type="text" autocomplete="first name" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="First Name">

          <input id="lastName" name="lastName" type="text" autocomplete="last name" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Last Name">

          <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address">
     
          <input id="password" name="password" type="password"  required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password">

          <input id="passwordConf" name="passwordConfirm" type="password"  required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Re-enter Password">
       
      </div>

       <small>By Signing up you agree to our data terms and conditions which can be found here <a href="/Privacy" class="text-blue-500 hover:text-blue-600">T&C's</a></small>
      <button type="submit" class="mb-5 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">        
          <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
          </svg>
        </span>
        Sign Up
      </button>

    </form>
</div>
