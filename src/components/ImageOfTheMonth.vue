<template>
  <div>
    <div class="flex">
      <div class="text">Please select a date to begin:</div>
      <form class="choose-date">
        <select @change="dateSelection($event)">
          <option v-for="(date, index) in dates" :value="date" :key="index">{{ date }}</option>
        </select>
      </form>
    </div>
    <div class="day" v-if="this.monthlyImage.date">
      <h2>{{this.monthlyImage.title}}</h2>
      <h3>{{this.monthlyImage.date}}</h3>
      <img
        class="nasa-image-of-the-month"
        :src="`${this.monthlyImage.hdurl}`"
        alt="nasa image pulled for specific day in a whole month"
      />
      <div>
        <button class="show-more" v-on:click="toggle = !toggle">Show Details</button>
        <p v-if="toggle">{{this.monthlyImage.explanation}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getImageOfTheMonth } from "../apiCalls";
export default {
  name: "ImageOfTheMonth",
  data() {
    let date = new Date().toISOString().slice(0, 10);
    let month = date.slice(0, 8);
    let day = date.slice(8, 10);
    let description = "";
    for (let index = 1; index < day; index++) {
      description += `${month}${index},`;
    }
    let returnAllDates = description.split(",");
    return {
      dates: returnAllDates,
      monthlyImage: {},
      toggle: false
    };
  },
  methods: {
    async dateSelection($event) {
      let choosenDate = $event.target.value;
      let image = await getImageOfTheMonth(choosenDate);
      this.monthlyImage = image;
    }
  }
};
</script>

<style lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

.nasa-image-of-the-month {
  height: 500px;
  width: 500px;
  box-shadow: 0 0 15px gray;
  border-radius: 500px;
}
.header {
  font-size: 32px;
  margin-top: 80px;
}

.choose-date {
  width: 100px;
  height: 30px;
  display: flex;
  padding: 8px;
}
.text {
  color: black;
  margin: 9px;
  font-size: 18px;
}

.flex {
  display: flex;
  justify-content: center;
  margin-top: 80px;
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