import store from "@/store"
//import {  useStore } from "vuex"

const useAuth = () =>{

    //const useStore = useStore()

    const createUser = async ( user )=>{

        const resp = await store.dispatch('auth/createUser', user)
        console.log(resp);
        
    }

    return{
        createUser
    }
}

export default useAuth
