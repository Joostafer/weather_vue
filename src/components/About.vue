<template>
  <div class="about">
    <pre>
      Weather App - this app writed by Joostafer.
      It used VueJS with axios, pinia.
      Worked with weather api, and secure api key.
    </pre>
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
    padding: 10px 25px ;
  }
</style>