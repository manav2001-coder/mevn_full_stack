<template>
  <div class="flex flex-center">
    <div>
    <div class="">
            <label class="font-bold opacity-70 text-sm">Email/Username</label>
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
            <label class="font-bold opacity-70 text-sm ">Password</label>
            <q-input filled :type="password_visibility ? 'text' : 'password'" no-pass-toggle v-model="password" class="mb-5 mt-1" dense><!-- minor func enter button for login -->
              <template v-slot:append>
               <q-icon  @click="password_visibility = !password_visibility" color="grey-6" :name="password_visibility ? 'visibility_off' : 'visibility'"/>
              </template>
              <q-tooltip>
                Please enter your password
              </q-tooltip>
            </q-input>

          </div>
          <q-btn label="Add User" @click="addUser(username,password)"></q-btn>
          </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data(){
    return{
      username:'',
      password:'',
      password_visibility:false,

    }
  },
  methods:{
    addUser(username,password){
      this.$axios.post("/addUser",{username:username,password:password}).then((res) => {
             if(res.ok){
              this.$q.notify({message: 'User added', type: 'negative'})
             }
      })
    }
  }
})
</script>
