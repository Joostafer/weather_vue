<template>

  <header>
    <div class="header-container">
      <div class="logo-container">
        <a @click="goToMain" href="#">Weather App</a>
      </div>
      <nav>
        <div class="nav-content">
          <a @click="goToMain" href="#">Main</a>
          <a @click="goToAbout" href="#">About</a>
        </div>
      </nav>
    </div>
  </header>

</template>

<script>
import {defineComponent} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
  setup() {

    const router = useRouter();
    const goToMain = () => {
      router.push({name: 'Main'});
    }
    const goToAbout = () => {
      router.push({name: 'About'});
    }

    return {
      goToMain,
      goToAbout
    }
  }
})
</script>

<style scoped>

.logo-container a {
  font-weight: 600;
}
a {
  text-decoration: none;
  color: #3b82f6;
}

.header-container {
  padding: 20px 28px;
  font-size: 18px;
  background-color: #b6c4d5;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: space-between;
}

.nav-content {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  gap: 20px;
}

</style>