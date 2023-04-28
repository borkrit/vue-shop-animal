import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../../views/Home.vue"
import Admin from "../../views/Admin.vue"
import AddCategory from '../components/AddCategory.vue'
import AddProduct from '../components/AddProduct.vue'


export default createRouter ({

    history:createWebHashHistory(),

    routes:[
        {path:'/home', component: Home, alias:'/' },
        {path: '/admin', component: Admin},
        {path:'/admin/add-category', component: AddCategory},
        {path:'/admin/add-product', component : AddProduct}

    ]
})