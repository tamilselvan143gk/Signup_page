import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./components/Home.vue";
import Signup from "./components/Signup.vue";
import Login from "./components/Login.vue";

const router = createRouter({
    history: createWebHashHistory(),

    routes: [
        { path:'/', name:"Home", component:Home },
        { path:'/sign_up', name:'Signup', component:Signup },
        { path:'/log_in', name:'Login', component:Login },
    ]
});

export default router;