<template>

  <Header/>
  <router-view/>

</template>

<script>
import {defineComponent} from "vue";
import Header from "./components/Header.vue";
export default defineComponent({
  components: {Header},
  setup(){


    return {

    }
  }
})
</script>

<style>

  * {
    padding: 0;
    margin:  0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    overflow-y: hidden;
  }
  main {
    min-height: 100vh;
    padding: 25px;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.75));
  }
</style>