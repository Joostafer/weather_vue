<template>

  <div class="weather" :class="typeof weather?.main !='undefined' && (weather?.main.temp - 273.15) > 16 ? 'warm':''">
    <div class="main">
      <div class="search-box">
        <input
            type="text"
            id="city"
            class="search-bar"
            placeholder="Search..."
            v-model="city"
            @keyup="fetchData"
        >

        <div v-if="weather?.main" class="weather-container">
          <div class="weather-wrap">
            <div class="location-box">
              <div class="location">
                {{ weather?.name }}, {{ weather.sys.country }}
                <div class="date">
                  {{ dateBuilder() }}
                </div>
              </div>
            </div>
            <div class="weather-box">
              <div class="temp">{{(weather?.main.temp - 273.15).toFixed(1)}}°C</div>
              <div class="weather">{{weather?.weather[0].main}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {defineComponent, ref, computed} from "vue";
import {useWeatherStore} from "@/store";
export default defineComponent({
  setup(){

    const city = ref('');
    const store = useWeatherStore();
    const weather = computed(()=> store.weatherData);

    function fetchData(){
      setTimeout(store.getWeatherData(city.value),2500)
    }

    function dateBuilder () {

      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;

    }

    return {
      city,
      weather,
      fetchData,
      dateBuilder
    }
  }
})
</script>

<style scoped>
    .weather {
      background-color: lightskyblue;
      background-position: bottom;
      background-size: cover;
      transition:0.4s;
    }
    .weather.warm {
      background-color: lightpink;
    }
    .search-box {
      width: 100%;
      margin-bottom: 30px;
    }
    .search-box .search-bar {
      display: block;
      width: 100%;
      padding: 15px;
      color: #313131;
      font-size: 20px;
      appearance: none;
      border: none;
      outline: none;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
      background-color: rgba(255,255,255, 0.5);
      border-radius: 0 16px 0 16px;
      transition: 0.4s;
    }
    .search-box .search-bar:focus {
      box-shadow: 0 0 16px rgba(0,0,0,0.25);
      background-color: rgba(255,255,255,0.75);
      border-radius: 16px 0 16px 0;
    }
    .location-box .location {
      color: #fff;
      font-weight: 500;
      font-size: 32px;
      text-align: center;
      text-shadow: 1px 3px rgba(0,0,0,0.25);
    }
    .location-box .date {
      color: #fff;
      font-weight: 300;
      font-size: 20px;
      font-style: italic;
      text-align: center;
    }
    .weather-box {
      text-align: center;
    }
    .weather-box .temp {
      display: inline-block;
      padding: 10px 25px;
      color: #fff;
      font-size: 102px;
      font-weight: 900;
      text-shadow: 3px 6px rgba(0,0,0,0.25);
      background-color: rgba(255,255,255,0.25);
      border-radius: 16px;
      margin: 30px 0;
      box-shadow: 3px 6px rgba(0,0,0,0.25);
    }
    .weather-box .weather {
      background: none;
      color: #fff;
      font-size: 48px;
      font-weight: 700;
      font-style: italic;
      text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    }
</style>