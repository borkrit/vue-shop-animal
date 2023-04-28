<script >
import Search from './components/Search.vue';

export default {
    components: { Search }
}

</script>

<template>
  <header >
    <div class="container">

      <nav class="navigation__top">
      <a  class="logo"> AnimalShop </a>

      <ul class="navigation__body">
        <li>
          <router-link to="/home" >Shop </router-link>
        </li>
        <li>
          <router-link to="/admin" >admin </router-link>
        </li>
      </ul>
    </nav>
    </div>
    
  </header>

 
<router-view > </router-view>

</template>
<style>
  .container{
    max-width: 1350px;
    /* padding: 0 auto; */
    margin: 0 auto;
    width: 100%;
  }
  .navigation__top{
    width: 100%;
    display: flex;
    justify-content: space-between;
    place-items: center;
  }
  header{
    display: flex;
    height: 50px;
    background-color: rgb(172, 216, 128);
    place-items: center;
  }
  .navigation__body{
    display: flex;
    gap: 20px;
    list-style: none;
  }
</style>