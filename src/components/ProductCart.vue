<template>
    <div class="product-details__card">
       <p class="product-details__title">
        {{ productShop.title }}
       </p> 

       <p class="product-details__info">
        {{ productShop.description }}
       </p>
       <p class="product-details__price">
         {{ productShop.price }}
       </p>
       
    </div>

</template>

<style>

.product-details__card{
    max-width: 1000px;
    margin: 0 auto;
}
.product-details__title{
    font-size: 30px;
    font-weight: bold;
}
.product-details__card p {
    margin: 10px 0;
}

</style>




<script>

import {useShopStore} from '../store/Store';

export default{
    setup(){
        const shop = useShopStore();

        return {
            shop
        }
    },
    computed :{
        productId(){
            return parseInt(this.$route.params.id)
        },

        productShop(){
            return this.shop.products.find(product=> product._id === this.productId)
        }

    }
}
</script>