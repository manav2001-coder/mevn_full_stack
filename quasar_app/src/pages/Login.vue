<template>
<!-- <div>
  <q-input label="Username" v-model="username"></q-input>
  <q-input label="Password" v-model="password"></q-input>
  <q-btn label="Login" class="q-mt-md" @click="login"></q-btn>
  </div> -->
  <section class="min-h-screen flex items-center justify-around py-5 px-20 lg:px-20 bg-gradient-to-r from-white  to-gray-300 ...">
  <div class="flex items-center justify-between">
<img class="mx-auto h-60" src="../assets/twitter.png" alt="aurochs"/>
  </div>
<div class="flex  flex-col justify-center py-16 sm:px-6 lg:px-8">
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
    <div class="bg-white px-6 py-5 shadow sm:rounded-lg border sm:px-12">
    <img class="mx-auto h-8" src="../assets/twitter.png" alt="aurochs"/>
      <div class="space-y-6 mt-6">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email/Username</label>
          <div class="mt-2">
            <q-input outlined type="email" v-model="username" class="mb-5 mt-1" dense >
              <template v-slot:append>
                <q-icon name="account_circle" color="grey-6"/>
              </template>
              <q-tooltip>
                Please enter email address / username
              </q-tooltip>
            </q-input>
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="mt-2">
          <q-input outlined :type="password_visibility ? 'text' : 'password'" no-pass-toggle v-model="password" class="mb-5 mt-1" dense @keyup.enter="login"><!-- minor func enter button for login -->
              <template v-slot:append>
               <q-icon  @click="password_visibility = !password_visibility" color="grey-6" :name="password_visibility ? 'visibility_off' : 'visibility'"/>
              </template>
              <q-tooltip>
                Please enter your password
              </q-tooltip>
            </q-input>
          </div>
        </div>

        <div>
          <button  @click="login" class="flex w-full justify-center rounded-full bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          <button  @click="login" class="flex w-full mt-3 justify-center rounded-full border-black border-2 bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Forgot password?</button>
        </div>
      </div>
    </div>
  </div>
</div>

  </section>
</template>
<script>
import { authStore } from '../stores/auth.js'
const auth = authStore();
export default ({
    data(){
        return{
            username:'',
            password:'',
            result:'',
            password_visibility:false
        }
    },
    methods:{
        login(){
              this.$axios.post("/login",{username:this.username,password:this.password}).then((res) =>{
                  auth.setLoginSession(res.data.session)
                  this.$router.push('/')
              }).catch((error) => {
                  console.log(error)
              })
        }
    },
})
</script>