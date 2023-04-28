<template>

<BackPage />

<div class="product__add">
        <p>Add product</p>

        <select name="category" id="" v-model="cater" >
            <option value="" disabled >Choose category</option>
            <option  v-for="category in shop.category" :value="category.name">
                {{ category.name }}
            </option>
        </select>


        <label for="title">Name product

        <input id="title" type="text" placeholder="Name product" v-model="titleProduct">

        </label>
        
        <label for="price">Price

            <input id="price" type="number" placeholder="price" v-model="price" required>


        </label>
        
        <label for="description">Description

            <input id="description" type="text" v-model="descProduct" required>

        </label>
        <div class="error" v-if='viewError'>
            Need write in all fields
        </div>

        <div class="succes" v-if='viewSucces'>
            Good product added
        </div>



        <button @click="addtoStore"> add product </button>


    </div>


</template>
<style>
    .product__add{
        max-width: 80%;
        margin: 0 auto;
    }
   .product__add input{
        margin: 10px 0 10px  65px ;
        
    }
   .product__add label{
        width: 50%;
    }
   .product__add button, .product__add select, .product__add label{
        display: block;
    }

</style>

<script>
import { useShopStore } from '../store/Store'
import BackPage from './BackPage.vue';

export default ({
    setup() {
        const shop = useShopStore();
        return {
            shop,
        };
    },
    data() {
        return {
            titleProduct:'',
            price: 0,
            descProduct: "",
            cater: "",
            viewError:false,
            viewSucces:false,
        };
    },
    components: { BackPage },
    methods:{
        addtoStore: function (){
            if(this.titleProduct =='' || this.price== 0 || this.descProduct =='' || this.cater ==''){
                this.viewError = true;
                setTimeout(()=>{this.viewError = false},2000)
            }else{
                this.shop.addProduct(this.titleProduct,this.price,this.descProduct,this.cater)
                this.cater='';
                this.viewSucces = true;
                setTimeout(()=>{this.viewSucces = false}, 2000)
                
            }

        },
       
    }
})

</script>