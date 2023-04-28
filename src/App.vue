<script >
import Search from './components/Search.vue';

export default {
    components: { Search }
}

</script>

<template>
  <header class="container">
    <a href="/home" class="logo"> AnimalShop </a>
    <nav>


      <ul class="navigation__body">
        <li>
          <router-link to="/home" >Shop </router-link>
        </li>
        <li>
          <router-link to="/admin" >admin </router-link>
        </li>
      </ul>
    </nav>
  </header>

 
<router-view > </router-view>

</template>
<style>
  .container{
    max-width: 1350px;
    padding: 0 1em;
  }
  header{
    display: flex;
    justify-content: space-between;
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