<template>
  <div class="image of the day">
    <h2>{{this.imageOfTheDay.title}}</h2>
    <h3>{{this.imageOfTheDay.date}}</h3>
    <img
      class="nasa-image-of-the-day"
      :src="`${this.imageOfTheDay.hdurl}`"
      alt="nasa image pulled for specific date"
    />
    <div>
      <button class="show-more" v-on:click="toggle = !toggle">Show Details</button>
      <p v-if="toggle">{{this.imageOfTheDay.explanation}}</p>
    </div>
  </div>
</template>

<script>
import { getImageOfTheDay } from "../apiCalls";
export default {
  name: "ImageOfTheDay",
  data() {
    return {
      imageOfTheDay: {},
      toggle: false
    };
  },
  async created() {
    let image = await getImageOfTheDay();
    this.imageOfTheDay = image;
  }
};
</script>
<style lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

.nasa-image-of-the-day {
  height: 500px;
  width: 500px;
  box-shadow: 0 0 15px gray;
  border-radius: 500px;
}

.show-more {
  margin-top: 20px;
  background-color: $blue;
  font-size: 16px;
  color: white;
  padding: 10px;
  border-radius: 4px;
}
</style>