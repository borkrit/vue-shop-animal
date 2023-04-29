<template>
    <div class="dashbord">

        <h1>Admin dashbord</h1>

        <div class="filters">
            <div class="filters__search">
                <label>Search</label>
                <input v-model="search" @keyup="searchFilter(search)" placeholder="search for name product" />

            </div>

            <div class="filters__category">
                <select name="" id="" v-model="cater">
                    <option value="">Choose category</option>
                    <option v-for="cat in shop.category">{{ cat.name }}</option>
                </select>
                <button @click="filter(cater)">filter</button>
            </div>
            <button @click="priceSort('small')"> Filter price by Small to Hide </button>

            <button @click="priceSort('hide')"> Filter price by Hide to small </button>


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





        </nav>


    </div>
</template>

<style>
.dashbord {
    padding: 1em;
}

.filters {
    display: flex;
    justify-content: space-around;
    margin: 10px auto;
}

@media (max-width: 450px) {

    .filters {
        flex-direction: column;
        width: max-content;
    }
}


.filters__search {
    position: relative;
}

.filters__search label {
    position: absolute;
    top: -2px;
    left: 5px;
    z-index: 3;
    background-color: white;
}

.filters__search input {
    max-width: 300px;
    width: 100%;
    padding: 10px;
}

.filters__category {
    display: flex;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
}

.filters__category select {
    padding: 10px;
    border: none;
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

.filter {}

.filter button {
    width: 100%;
    margin-top: 10px;
}
</style>

<script>
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
            search: '',
            prod: this.shop.products,
            cater: '',

        };
    },
    methods: {
        filter: function (e) {

            const product = this.shop.products.filter(item => item.category == e);
            this.prod = product

        },

        searchFilter: function (e) {
            const product = this.shop.products.filter((item) => item['title'].toLowerCase().includes(e.toLowerCase()))

            this.prod = product;

        },
        priceSort: function (e) {

            if (e === 'small') {

                this.prod = this.shop.products.sort(
                    (p1, p2) =>
                        (p2.price < p1.price) ? 1 : (p2.price > p1.price) ? -1 : 0)
            }
            if (e === 'hide') {

                this.prod = this.shop.products.sort(
                    (p1, p2) =>
                        (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0)
            }



        }



    }

})

</script>