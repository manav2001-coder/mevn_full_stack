<template>
  <div class="h-screen flex overflow-hidden bg-gray-50">

    <Sidebar />
    <div class="flex flex-col w-full flex-1 h-screen overflow-auto">
      <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow w-full">
        <!-- <div class="border-r flex items-center justify-center">
          <q-btn icon="reorder" flat  class="border-r"></q-btn>
          </div> -->
        <div class="flex-1 flex justify-end">
          <div class=" flex items-center justify-center max-w-7xl py-4 mr-auto px-5 sm:px-6 md:px-5 md:max-w-full">
            <h1 class="text-xl font-semibold text-black">{{ $route.name }}</h1>
          </div>
          <div class="ml-4 flex items-center md:ml-6  md:flex ">


            <!-- <div class="ml-3 relative">
              <div>
                <q-btn color="accent text-grey-7 text-capitalize float-right" flat :label="username">
              <q-icon name="account_circle" class="q-pr-sm q-ml-sm"></q-icon>
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

            </div> -->
          </div>
        </div>
      </div>
      <!-- hiding breadcrumb for time being -->
      <!--<BreadCrumb />--> 
      <!-- This example requires Tailwind CSS v2.0+ -->
      <main class="flex-1 relative overflow-y-auto focus:outline-none w-full py-2">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 md:max-w-full h-full bg-blue-gray">
          <!-- Replace with your content -->
          <router-view />
          <!-- /End replace -->
        </div>
      </main>

     
    </div>

  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { authStore } from '../stores/auth.js'
import Sidebar from '../components/Sidebar.vue'
import { mapState } from 'pinia'

const auth = authStore()

export default defineComponent({
  name: 'MainLayout',
  components:{Sidebar},
  data(){
    return{
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
  },
  computed:{
     ...mapState(authStore,['username'])
  },
})
</script>
