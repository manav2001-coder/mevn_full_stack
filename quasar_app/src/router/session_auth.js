import { authStore } from "../stores/auth.js";
import axios from "axios";
import { defineStore } from 'pinia'


export const sessionGuard = (to, from, next) => {
    const auth = authStore()
    let publicPages = ["/privacy-policy","/login"]
    if(publicPages.includes(to.fullPath)){
        next()
    }
    else if(auth.is_logged_in){
        next()
    }
    else{
        axios.get('/api/auth').then((res) => {
            if(res.data.ok){
                auth.setLoginSession(res.data.session)
                next()
            }
            else{
                next('/login')
            }
        })
    }  
} 
