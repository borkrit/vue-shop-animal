<template>
    <Search />






    <input type="text" v-model="categoryName">

    <button @click="{ shop.addCattegory(categoryName); categoryName='' }
        "> add</button>




    <div class="product__add">

        <select name="category" id="" v-model="cater" >
            <option value="" disabled >Choose category</option>
            <option  v-for="category in shop.category" :value="category.name">
                {{ category.name }}
            </option>
        </select>
        <input type="text" v-model="titleProduct">
        <input type="number" v-model="price">
        <input type="text" v-model="descProduct">



        <button @click="{ shop.addProduct(titleProduct,price,descProduct,cater); categoryName='' }
        "> add</button>




        
    </div>
</template>


<script>
import { ref } from 'vue'
import { useShopStore } from '../src/store/Store'
import Search from '../src/components/Search.vue'

export default ({
    setup() {
        const shop = useShopStore();
        return {
            shop,
        };
    },
    data() {
        return {
            categoryName: "",
            titleProduct: "",
            price: 0,
            descProduct: "",
            cater: "",
        };
    },
    components: { Search }
})

</script>