<style>
.product__list {
     display: flex;
     flex-wrap: wrap;
     gap: 40px;
}
.product__item{
    width: 300px;
    background-color: beige;
}
</style>
<template>
    <h1>
        Products List 
    </h1>
    <div class="product__list">
        <div class="product__item" v-for="product in shop.products" >
            <small>category - {{ product.category }}</small>
            <p class="product__title">
                {{ product.title }}
            </p>
            <p class="product__description">
                {{ product.description }}
            </p>

            <p class="product__price">
                {{ product.price }} {{ product.currence }}
            </p>
        </div>
    </div>

<!-- admin section  -->

<Admin/>

</template>
<script>
import Card from '../src/components/Card.vue';
import { useShopStore } from '../src/store/Store';
import Admin from './Admin.vue';

export default({
    setup() {
        const shop = useShopStore();
        return {
            shop
        };
    },
    components: { Card, Admin }
})

</script>
