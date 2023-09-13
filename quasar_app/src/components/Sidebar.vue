<template>
    <div class=" md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col h-0 flex-1">
          <div class="flex items-center justify-center h-16 flex-shrink-0 px-4 bg-gray-900 border-gray-200">
            <img class="h-12 w-auto" src="../assets/node_js.png" alt="Workflow">
          </div>
          <div class="flex-1 flex flex-col overflow-y-auto">
            <nav class="flex-1 px-2 py-2 bg-gray-800 space-y-1 text-black">
  <ul>
           <li v-for="(nav,index) in navigation" :key="index" class="py-1">
              <button type="button" :class="($route.path.split('/')[1]==nav.path.split('/')[1]) ? 'bg-red-600 text-white': '' " class="flex items-center p-2 w-full font-medium text-sm  text-gray-400 rounded-lg transition duration-75 hover:bg-red-500 hover:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" @click="$router.push(nav.path)">
                    <img class="mr-3 flex-shrink-0 h-5 w-5 text-white" :src="require(`../statics/${nav.icon}`)" alt="">
                    <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{{nav.label}}</span>
              </button>
           </li>
           </ul>
           </nav>
          
     </div>
          </div>
          <div class="flex flex-row justify-around bg-gray-900 hover:bg-gray-800 py-">
            <q-btn type="a" href="/privacy-policy" target="_blank"  label="Privacy Policy" class="text-xs font-thin" color="white" flat></q-btn>
          </div>
        </div>
      </div>
  </template>
  <script>
  export default {
    name: 'SideBar',
    data(){
      return{
   nav: [
          {label: 'Home', path: '/', icon: 'home', privileges: [],},
          {label: 'Config', path: '/config/plans/', icon: 'cog', privileges: []},
          {label: 'Prep', path: '/prep/uploads/', icon: 'archive', privileges: []},
        ],
    }},
        computed:{
      navigation() {
        return this.nav.map((item) => {
          item.icon = `icons/${item.icon}.svg`
          return item;
        })
      }
  },
  }
  
  </script>