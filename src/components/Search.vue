<template>
    <div class="search">
        <label class="search">Search</label>


        <input   v-model="search" placeholder="search for name product" />

    </div>
<div class="product__list">
    <div v-for="product in shop.searchProduct(search)" class="product__item">
        <!-- <small>category - {{ product.category }}</small> -->
        <img :src="'../../src/assets/'+ product.category +'.svg'"  :class="'product__image product__' + product.category "  />
            <p class="product__title">
                {{ product.title }}
            </p>
            <p class="product__description">
                {{ product.description }}
            </p>

            <p class="product__price">
             Price -    {{ product.price }} {{ product.currence }}
            </p>
    </div>
</div>
    
</template>
<style>
input{
    padding: 5px;
    width: 70%;
}
.search{
    margin-bottom: 10px;
    margin-inline: auto;
    width: 70%;
}
.product__list {
     display: flex;
     flex-wrap: wrap;
     gap: 40px;
     justify-content: center;
}
.product__item{
    width: 300px;
    background-color: beige;
    position: relative;
    padding: 1em;
    border-radius: 10px;
}
.product__image{
    width: 20px;
    position: absolute;
    right: 5px;
    top: 5px;
}
.product__Animal{
    transform: rotate(5deg);

}
</style>
<script>
import { useShopStore } from '../store/Store'



export default ({
    setup() {
        const shop = useShopStore()


        return {
            shop,
        }
    },
    data() {
        return {
            search: ''
        }
    },

})
</script>