<template>
  <div class="flex flex-center">
    <div>
    <div class="">
            <label class="font-bold opacity-70 text-sm">Email</label>
            <q-input filled type="email" v-model="email" class="mb-5 mt-1" dense >
              <template v-slot:append>
                <q-icon name="account_circle" color="grey-6"/>
              </template>
              <q-tooltip>
                Please enter email address
              </q-tooltip>
            </q-input>
          </div>
          <div class="">
            <label class="font-bold opacity-70 text-sm ">Password</label>
            <q-input filled :type="password_visibility ? 'text' : 'password'" no-pass-toggle v-model="password" class="mb-5 mt-1" dense>
              <template v-slot:append>
               <q-icon  @click="password_visibility = !password_visibility" color="grey-6" :name="password_visibility ? 'visibility_off' : 'visibility'"/>
              </template>
              <q-tooltip>
                Please enter your password
              </q-tooltip>
            </q-input>

          </div>
          <div class="">
            <label class="font-bold opacity-70 text-sm ">Username</label>
            <q-input filled  no-pass-toggle v-model="username" class="mb-5 mt-1" dense>
              <q-tooltip>
                Please enter your username
              </q-tooltip>
            </q-input>

          </div>
          <div class="">
            <label class="font-bold opacity-70 text-sm ">Name</label>
            <q-input filled  no-pass-toggle v-model="name" class="mb-5 mt-1" dense>
              <q-tooltip>
                Please enter your name
              </q-tooltip>
            </q-input>

          </div>
          <div class="">
            <label class="font-bold opacity-70 text-sm ">Phone</label>
            <q-input filled  no-pass-toggle v-model="phone" class="mb-5 mt-1" dense>
              <q-tooltip>
                Please enter your phone number
              </q-tooltip>
            </q-input>

          </div>
          <q-btn label="Add User" @click="addUser({email:email,username:username,password:password,name:name,phone:Number(phone)})"></q-btn>
          </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data(){
    return{
      email:'',
      username:'',
      password:'',
      name:'',
      phone:'',
      password_visibility:false,

    }
  },
  methods:{
    addUser(session){
      console.log(session)
      this.$axios.post("/addUser",session).then((res) => {
             if(res.ok){
              this.$q.notify({message: 'User added', type: 'negative'})
             }
      })
    }
  }
})
</script>
