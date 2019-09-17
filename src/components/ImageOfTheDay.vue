<template>
  <div class="image of the day">
    <h2>{{this.imageOfTheDay.title}}</h2>
    <h3>{{this.imageOfTheDay.date}}</h3>
    <img v-bind:src="`${this.imageOfTheDay.hdurl}`" alt="nasa image pulled for specific date" />
    <p>{{this.imageOfTheDay.explanation}}</p>
  </div>
</template>

<script>
import { getImageOfTheDay } from "../apiCalls";
export default {
  name: "ImageOfTheDay",
  props: {
    msg: Object
  },
  data() {
    return {
      imageOfTheDay: {}
    };
  },
  async created() {
    let image = await getImageOfTheDay();
    this.imageOfTheDay = image;
  }
};
</script>
<style scoped>
img {
  height: 350px;
  width: 350px;
}
</style>