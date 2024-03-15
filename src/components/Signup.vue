<template>
  <section>
    <div class="h-screen w-full">
      <div class="max-w-[500px] max-h-full mx-auto p-5">
        <div>
          <div class="p-3 shadow-md w-full mb-5">
            <p>User Name :</p>
            <input
              v-model="userName"
              class="outline-none bg-gray-100 rounded-md w-full h-10 px-3"
              type="text"
              name="text"
              id="text"
              required
            />
          </div>
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
          <div class="p-3 shadow-md w-full mb-5">
            <p>Gender :</p>
            <div class="flex justify-around">
              <p>
                Male <input v-model="gender" type="radio" name="radio" id="radio1" value="male" required />
              </p>
              <p>
                Female <input v-model="gender" type="radio" name="radio" id="radio2" value="female" required />
              </p>
            </div>
          </div>
          <div class="p-3 shadow-md w-full mb-5 text-center">
            <p>DOB</p>
            <input v-model="dob" class="w-full" type="date" name="date" id="date" required />
          </div>
          <div class="p-3 shadow-md w-full mb-5 flex gap-3">
            <input v-model="agreeTerms" type="checkbox" name="checkbox" id="checkbox" required />
            <p>Yes i agree the terms and condition</p>
          </div>
          <div class="p-3 w-full text-center">

            <button @click="submitForm" class="text-white bg-green-500 text-sm py-1 px-3 rounded hover:bg-indigo-500 hover:animate-pulse">Submit</button>  
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { formMixins } from "../formMixins";
export default {
  mixins: [formMixins],
    data() {
        return {
            userName: '',
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            gender: null,
            dob: '',
            agreeTerms: false,
        };
    },
  methods: {
   submitForm() {
            this.validateEmail();
            this.validatePassword();

            if (this.formInvalid()) {
                return;
            }

            const formData = {
                userName: this.userName,
                email: this.email,
                password: this.password,
                gender: this.gender,
                dob: this.dob,
                agreeTerms: this.agreeTerms
            };

            fetch('https://webhook.site/613d57a8-db76-4417-b5b9-68220dff19af', {
                method: 'POST',
                  mode: 'no-cors',
                  headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Form data submitted successfully:', data);
                    // this.userName = '';
                    // this.email = '';
                    // this.password = '';
                    // this.gender = '';
                    // this.dob = '';
                    // this.agreeTerms = false;
                })
                .catch(error => {
                    console.error('Error submitting form:', error);
                });
        },

  }
};
</script>

<style>
</style>