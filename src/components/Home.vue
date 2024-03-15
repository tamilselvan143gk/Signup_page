<template>
  <section class="h-screen flex">
    <div
      class="bg-gradient-to-b from-sky-400 to-indigo-600 text-white w-[500px] p-10"
    >
      <p class="pb-28"><span class="font-bold text-3xl">typing</span>.com</p>
      <p class="text-xl font-bold pb-8">
        Learn the Foundations of Technology, FREE!
      </p>
      <p>
        Build essential skills with our comprehensive curriculum including
        keyboarding, digital literacy, and coding!
      </p>
    </div>
    <div class="text-center w-full mt-40">
      <p class="text-4xl font-semibold tracking-wider">Start Login</p>
      <p class="text-xs mt-3">
        Don't have an account?
        <router-link :to="{ name: 'Signup' }">
          <a class="text-blue-600 underline">Sign Up Free!</a></router-link
        >
      </p>
      <p class="italic text-gray-400 mt-3">Log in</p>
      <router-link :to="{ name: 'Login' }">
        <button
          class="bg-blue-500 text-white mt-3 px-3 py-1 rounded hover:bg-lime-500"
        >
          Log in
        </button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>
