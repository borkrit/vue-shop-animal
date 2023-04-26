<template>
    <p class="card__title">
            {{ product }}
        </p>
    <div class="card__inner">
        <div class="card__img">
            <img :src="image" :alt="product"/>
        </div>
        <div class="card__info">
            <p class="card__price"> {{ currence }} </p>
            <p class="description" >
                An apple mobile which is nothing like apple
            </p>

                

            <select name="" id="" v-model="currence" >
                <option   v-for="item in prices" :value="item.value" > 
                    {{ item.cur  }}
                </option>
            </select>


        </div>



    </div>
</template>

<script>

export default ({
    


    data(){
        
        return{
            product: 'Title product ',
            image:'src/assets/1.jpg',
            currence:'12 pln',
            prices: [
                {cur:'PLN', value:'12 pln'},
                {cur:'EUR', value:'€ 10 '},
                {cur:'USD', value:'11 $'},

            ]
        }

    }
    
    
})

</script>
<style>
.card__title{
    font-size: 40px;
    font-weight: 700;
}

.card__inner {
    display: flex;

}
.card__img{
    width: 35%;
}
.card__info{
    width: 60%;
    height: 100px;
    background-color: aqua;
}
img{
    width: 200px;

}
</style>