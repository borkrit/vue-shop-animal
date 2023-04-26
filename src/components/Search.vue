<template>
    {{ shop.searchProduct(search) }}
        <input v-model="search" placeholder="Seach for name product" />

</template>

<script>
import { useShopStore } from '../store/Store'



export default ({
    setup() {
        const shop = useShopStore()


        return {
            shop,
        }
    },
    data(){
        return{
            search:''
        }
    }
})
</script>