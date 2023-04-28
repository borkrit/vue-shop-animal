<template>
    <p>Category</p>

    <div class="category__list">

        <div v-for="ct in shop.category" @click="ctr = ct.name" class="category__item">
            <p>{{ ct.name }}</p>
            <img :src="'../../src/assets/' + ct.name + '.svg'" :class="'category__image category__' + ct.name" />

        </div>
    </div>

    {{ shop.searchProduct(ctr, 'category') }}
</template>
<style>
.category__list {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 10px 0;
}

.category__item {
    width: 250px;
    height: 150px;
    background-color: #b2ffb2;
    position: relative;
    display: grid;
    place-items: center;
    cursor: pointer;
}

.category__item p {
    font-size: 30px;
    font-weight: 700;
    color: white;
    z-index: 4;
    text-shadow: 0 0 7px black;
}

.category__image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    filter: blur(3px);
}
</style>
<script>
import { computed } from 'vue'
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
            ctr: ''
        }
    }

})

</script>
