<template>
    <div class=" md:flex md:flex-shrink-0 border-gray-200 border-r">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col h-0 flex-1">
          <div class="flex items-center h-16 flex-shrink-0 px-4 bg-white border-gray-200">
            <img class="h-6 w-auto" src="../assets/twitter.png" alt="Workflow">
          </div>
          <div class="flex-1 flex flex-col overflow-y-auto">
            <nav class="flex-1 px-2 py-2 bg-white space-y-1 text-black">
  <ul>
           <li v-for="(nav,index) in navigation" :key="index" class="py-1">
              <button type="button" :class="($route.path.split('/')[1]==nav.path.split('/')[1]) ? 'text-black font-bold': '' " class="flex items-center p-2 w-full  text-lg font-normal  text-black rounded-lg transition duration-75 hover:bg-gray-100" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" @click="$router.push(nav.path)">
                    <img class="mr-3 flex-shrink-0 h-5 w-5 text-white" :src="require(`../statics/${nav.icon}`)" alt="">
                    <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{{nav.label}}</span>
              </button>
           </li>
           </ul>
           </nav>
          
     </div>
          </div>
          <div class="flex flex-row items-center justify-between py-3 px-2 bg-white hover:bg-gray-100">
          <div class="flex px-2">
          <div>
          <img class="h-10 w-auto rounded-full" src="../assets/profile.jpeg" alt="Workflow">
          </div>
                          <div class="flex flex-col ml-3">
                <!-- TODO: Implement clickaway-->
                            <div class="font-bold">Manav Bajaj</div>
                <div class="accent font-normal text-md text-grey-7 text-capitalize">
                @{{username}}
            </div>
              </div>
              </div>
            <div>
              <q-btn color="accent font-normal text-md text-grey-7 text-capitalize" flat icon="more_horiz">
              <q-menu transition-show="flip-right"
          transition-hide="flip-left">
                <q-card>
                   <q-card-actions vertical class="text-grey-7">
        <q-btn flat v-bind:to="'/change_password'" >Change Password</q-btn>
        <q-separator />
        <q-btn flat @click="logout">Sign Out</q-btn>
      </q-card-actions>
                </q-card>
              </q-menu>
            </q-btn>
            </div>
          </div>
        </div>
      </div>
  </template>
  <script>
  import { mapState } from 'pinia'
  import { authStore } from '../stores/auth.js'

  const auth = authStore()

  export default {
    name: 'SideBar',
    data(){
      return{
   nav: [
          {label: 'Home', path: '/', icon: 'home', privileges: [],},
          {label: 'Explore', path: '/config/plans/', icon: 'cog', privileges: []},
          {label: 'Notifications', path: '/prep/uploads/', icon: 'archive', privileges: []},
        ],
    }},
        computed:{
     ...mapState(authStore,['username']),
      navigation() {
        return this.nav.map((item) => {
          item.icon = `icons/${item.icon}.svg`
          return item;
        })
      }
  },
  methods:{
          logout(){
      this.$axios.get("/logout").then((res) => {
          if(res.data.ok){
            
             auth.destroyLoginSession()
             this.$router.push('/login')
          }
      })
    }
  }
  }
  
  </script>