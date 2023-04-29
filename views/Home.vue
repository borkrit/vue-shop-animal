<style>
.product__list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
}

.product__item {
    width: 300px;
    background-color: beige;
}

input {
    padding: 5px;
    width: 70%;
}

.search {
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

.product__item {
    width: 300px;
    background-color: beige;
    position: relative;
    padding: 1em;
    border-radius: 10px;
}

.product__image {
    width: 20px;
    position: absolute;
    right: 5px;
    top: 5px;
}

.product__Animal {
    transform: rotate(5deg);

}
</style>
<template>
    <h1>
        Products List
    </h1>

    <div class="category__list">

        <div v-for="ct in shop.category" @click="ctr = ct.name" class="category__item">
            <p>{{ ct.name }}</p>
            <img :src="'../../src/assets/' + ct.name + '.svg'" :class="'category__image category__' + ct.name" />

        </div>
    </div>

    
    <div class="search">
        <label class="search">Search</label>


        <input v-model="search" @keyup="ctr=''"  placeholder="search for name product" />

    </div>

    <div class="product__list">
        <div v-if="ctr == ''"   v-for="product in shop.searchProduct(search)" class="product__item">
            
            <router-link :to="`/product/${product._id}`">
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
            </router-link>
        </div>

        <div v-else  v-for="product in shop.searchProduct(ctr, 'category')" class="product__item">
           <router-link :to="`/product/${product._id}`">
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
                Priceds - {{ product.price }} {{ product.currence }}
            </p>
            </router-link>
        </div>

        <div v-if="shop.notFound" > 
            NOT FOUND
        </div>



    </div>
</template>
<script>
import Category from '../src/components/Category.vue';
import Search from '../src/components/Search.vue';
import { useShopStore } from '../src/store/Store';

export default ({
    setup() {
        const shop = useShopStore();
        return {
            shop
        };
    },
    data() {
        return {
            search: '',
            ctr:''
        }
    },
    components: { Search, Category }
})

</script>
