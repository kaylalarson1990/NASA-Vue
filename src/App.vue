<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/imageOfTheDay">Image of the Day</router-link>
      <router-link to="/imageOfTheMonth">Image of the Month</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Home from "./Home.vue";
import ImageOfTheDay from "./components/ImageOfTheDay";
import ImageOfTheMonth from "./components/ImageOfTheMonth";

export default {
  name: "app",
  components: {
    Home,
    ImageOfTheDay,
    ImageOfTheMonth
  }
};
</script>


<style lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

body {
  background: $white;
}

h1 {
  @include heading-1;
}

p {
  @include large-text-bold($black);
  font-size: 18px;
  margin: 40px 100px;
  text-align: left;
  font-family: "Open Sans";
  font-weight: 500;
}

#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $light-blue;
}
#nav {
  padding: 30px;
  display: flex;
  margin: 0;
  justify-content: space-evenly;
  box-shadow: 0 3px 2px -2px gray;
  a {
    font-weight: 500;
    font-size: 24px;
    letter-spacing: 0.05em;
    color: $blue;
    &.router-link-exact-active {
      color: $red;
    }
  }
  a:link {
    text-decoration: none;
  }
}
</style>
