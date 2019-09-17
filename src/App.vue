<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/pictureOfTheDay">Image of the Day</router-link>
      <router-link to="/pictureOfTheMonth">Image of the Month</router-link>
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
  @include large-text-bold($light-blue);
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
  justify-content: space-evenly;
  a {
    font-weight: bold;
    font-size: 32px;
    color: $dark-blue;
    &.router-link-exact-active {
      color: $middle-blue;
    }
  }
  a:link {
    text-decoration: none;
  }
}
</style>
