<template>
<BackPage/>
<div class="category__add">
        <p>add category</p>

        <input type="text" v-model="categoryName">
    
        <button @click=" addtoCategory
            "> add category</button>
</div>

<div class="error" v-if="viewError">
        Need write name category
    </div>

<div v-if="viewSucces" class="added">
    Category {{ categoryName }}  added 
</div>


<div class="list">
    <p class="title">Name category</p>
    <div v-for="category in shop.category" >
        {{ category.name }}
    </div>
</div>

</template>
<style>
    .list .title{
        font-weight: 700;
        font-size: 30px;
    }
    .list > div{
        margin: 10px 0;
    }
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
.list{
    margin-top: 20px;
    width: 50%;
    margin-inline: auto;
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
            viewError:false,
            viewSucces:false
        };
    },
    computed: {
        // timers() {
        //     setTimeout(() => { this.added = !this.added; this.categoryName = ""; }, 3000);
        // }
    },
    components: { BackPage },

    methods:{
        addtoCategory: function (){
            if(this.categoryName == ""){
                this.viewError = true;
                setTimeout(()=>{this.viewError = false},2000)
            }else{
                this.shop.addCattegory(this.categoryName)
                this.categoryName='';
                this.viewSucces = true;
                setTimeout(()=>{this.viewSucces = false}, 2000)
                
            }

        },
       
    }
})

</script>