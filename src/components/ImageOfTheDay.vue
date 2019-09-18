<template>
  <div class="image of the day">
    <h2>{{this.imageOfTheDay.title}}</h2>
    <h3>{{this.imageOfTheDay.date}}</h3>
    <img
      class="nasa-image-of-the-day"
      :src="`${this.imageOfTheDay.hdurl}`"
      alt="nasa image pulled for specific date"
    />
    <p>{{this.imageOfTheDay.explanation}}</p>
  </div>
</template>

<script>
import { getImageOfTheDay } from "../apiCalls";
export default {
  name: "ImageOfTheDay",
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
<style lang="scss">
.nasa-image-of-the-day {
  height: 500px;
  width: 500px;
  box-shadow: 0 0 15px gray;
  border-radius: 500px;
}
</style>