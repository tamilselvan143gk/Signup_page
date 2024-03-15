<template>
  <section class="h-screen w-full">
    <div class="max-w-[500px] max-h-full mx-auto p-5">
      <p>Log In</p>
      <form>
        <div class="p-3 shadow-md w-full mb-5">
          <p>Email :</p>
          <input
            v-model="email"
            @blur="validateEmail"
            class="outline-none bg-gray-100 rounded-md w-full h-10 px-3"
            type="email"
            name="email"
            id="email"
            required
          />
          <span v-if="emailError" class="text-red-500">{{ emailError }}</span>
        </div>
        <div class="p-3 shadow-md w-full mb-5">
          <p>Password :</p>
          <input
            v-model="password"
            @blur="validatePassword"
            class="outline-none bg-gray-100 rounded-md w-full h-10 px-3"
            type="password"
            name="password"
            id="password"
            required
          />
          <span v-if="passwordError" class="text-red-500">{{
            passwordError
          }}</span>
        </div>
        <div class="text-center">
            <input class="bg-green-500 text-white mt-3 px-3 py-1 rounded hover:bg-indigo-500 cursor-pointer" type="submit" value="Log in">
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { formMixins } from "../formMixins";
export default {
    mixins: [formMixins],
};
</script>

<style>
</style>