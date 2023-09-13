<template>
<!-- <div>
  <q-input label="Username" v-model="username"></q-input>
  <q-input label="Password" v-model="password"></q-input>
  <q-btn label="Login" class="q-mt-md" @click="login"></q-btn>
  </div> -->
  <section class="min-h-screen flex items-center justify-center py-5 px-5 lg:px-1 bg-gray-200">
    <div class="flex flex-wrap lg:flex-nowrap items-start justify-center">
      <div class="w-full sm:w-96 lg:mr-6 ">
        <div class="flex flex-col justify-evenly bg-white shadow-xl rounded-lg py-8 px-5 sm:px-5">
          <div class="mb-5">
            <img class="mx-auto h-16" src="../assets/node_js.png" alt="aurochs"/>
            <h1 class="  mb-4 mt-5 text-center text-xl font-bold text-green-600 ">
            Sign in to your account
             
            </h1>
          </div>
          <div class="">
            <label for="loginEmail" class="font-bold opacity-70 text-sm">Email/Username</label>
            <q-input filled type="email" v-model="username" class="mb-5 mt-1" dense >
              <template v-slot:append>
                <q-icon name="account_circle" color="grey-6"/>
              </template>
              <q-tooltip>
                Please enter email address / username
              </q-tooltip>
            </q-input>
          </div>
          <div class="">
            <label for="loginPassword" class="font-bold opacity-70 text-sm ">Password</label>
            <q-input filled :type="password_visibility ? 'text' : 'password'" no-pass-toggle v-model="password" class="mb-5 mt-1" dense @keyup.enter="login"><!-- minor func enter button for login -->
              <template v-slot:append>
               <q-icon  @click="password_visibility = !password_visibility" color="grey-6" :name="password_visibility ? 'visibility_off' : 'visibility'"/>
              </template>
              <q-tooltip>
                Please enter your password
              </q-tooltip>
            </q-input>
          </div>
          <div class="mt-3">
            <q-btn class="bg-green-600 text-white" @click="login" label="Sign In" style="width: 100%"/>
          </div>
          <div class="flex justify-end">
          <a target="_blank" href="/privacy-policy" class="mt-2 text-green-600 text-xs flex justify-end underline">Privacy Policy</a>
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