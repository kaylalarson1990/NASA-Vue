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
        alt="nasa-image-of-the-day"
      />
      <p>{{this.monthlyImage.explanation}}</p>
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
      monthlyImage: {}
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
.nasa-image-of-the-month {
  height: 400px;
  width: 1000px;
  box-shadow: 0 0 15px gray;
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
</style>