<script>
	import '../app.postcss';
</script>

<nav class="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-50 text-gray-500 hover:text-gray-700 focus:text-gray-700">
  <div class="container-fluid w-2/6 flex flex-wrap items-center justify-between px-6">
    <div class="container-fluid">
      <a class="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1" href="/">
        <img class="mr-2" src="https://raw.githubusercontent.com/Stprry/t-s-s/main/public/Software%20Strongman.png" style="height: 20px" alt="" loading="lazy" />
        <span class="font-medium">Software Strongman</span>
      </a>
    </div>
  </div>
   <ul class="container-fluid w-3/6 flex flex-wrap items-center justify-end space-x-4  px-6  text-gray-90 mt-2 lg:mt-0 mr-1">
      <li class="hover:text-black "><a href="/Login">Login</a></li>
	  <li class="hover:text-black"><a href="/Register">Register</a></li>
	</ul>
</nav>

<div class="max-w-screen-lg mx-auto py-8 px-4  min-h-screen">
	<slot />
</div>


