<template>
  <div class="about">

    <p>Weather App - this app writed by Joostafer.</p>
    <p>It used VueJS with axios, pinia.</p>
    <p>Worked with weather api, and secure api key.</p>

  </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  setup(){


    return {

    }
  }
})
</script>

<style>
  .about {
    background-color: #b6c4d5;
    background-size: cover;
    background-position: bottom;
    height: 100vh;
    padding-top: 30px;
  }

  .about p {
    width: 100%;
    padding: 10px 25px ;
  }
</style>