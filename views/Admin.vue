<template>
    <div class="dashbord">

        <h1>Admin</h1>

        <div class="search">
            <label class="search">Search</label>


            <input v-model="search" @keyup="searchFilter(search)"  placeholder="search for name product" />

        </div>
        <div class="product__list">
            <div v-for="product in prod" class="product__item">
                <!-- <small>category - {{ product.category }}</small> -->
                <img :src="'../../src/assets/' + product.category + '.svg'"
                    :class="'product__image product__' + product.category" />
                <p class="product__title">
                    {{ product.title }}
                </p>
                <p class="product__description">
                    {{ product.description }}
                </p>

                <p class="product__price">
                    Price - {{ product.price }} {{ product.currence }}
                </p>
            </div>
        </div>

        <view-route></view-route>
        <nav class="navigation__admin">
            <router-link to="/admin/add-category">Add category </router-link>

            <router-link to="/admin/add-product"> Add product</router-link>


            <div class="filter">
          

            <select name="" id="" v-model="cater" >
            <option    value="">Choose category</option>

            <option v-for="cat in shop.category"   >{{ cat.name }}</option>

        </select>
            <button @click="filter(cater)" >filter</button>
        </div>


        </nav>

        




    </div>
</template>

<style>
.dashbord {
    padding: 1em;
}

.product__list {
    max-width: 70%;
    margin: 0 auto;
}

.navigation__admin {
    position: fixed;
    top: 20%;
    display: flex;
    gap: 40px;
    flex-direction: column;
    max-width: 20%;
}
.filter{
}
.filter button{
    width: 100%;
    margin-top: 10px;
}
</style>

<script>
import { ref } from 'vue'
import { useShopStore } from '../src/store/Store'

export default ({
    setup() {
        const shop = useShopStore();
        return {
            shop,
        };
    },
    data() {
        return {
            search:'',
            prod: this.shop.products,
            cater:'',

        };
    },
    methods:{
        filter: function(e){

            const r = this.shop.products.filter(item => item.category == e);
            this.prod=r

        },

        searchFilter: function(e){

            const r = this.shop.products.filter((item) => item['title'].toLowerCase().includes(e.toLowerCase()))
            this.prod=r;

        },
       

        
    }

})

</script>