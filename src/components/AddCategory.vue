<template>
<BackPage/>
<div class="category__add">
        <p>add category</p>

        <input type="text" v-model="categoryName">

        <button @click="{ shop.addCattegory(categoryName);  added = !added; timers }
            "> add category</button>
</div>
<div v-if="added" class="added">
    Category {{ categoryName }}  added 
</div>

</template>
<style>
    .product__add{
        max-width: 80%;
        margin: 0 auto;
    }
    input{
        margin: 10px 0;
    }
    button,select{
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
            categoryName: "",
            added: false,
        };
    },
    computed: {
        timers() {
            setTimeout(() => { this.added = !this.added; this.categoryName = ""; }, 3000);
        }
    },
    components: { BackPage }
})

</script>