<template>
  <div>
    <div class="flex">
      <option disabled value>Please select a date:</option>
      <form class="choose-date">
        <select @change="selectDate($event)">
          <option v-for="(date, index) in dates" v-bind:value="date" :key="index">{{ date }}</option>
        </select>
      </form>
    </div>
    <div class="day" v-if="this.monthlyImage.date">
      <h2>{{this.monthlyImage.title}}</h2>
      <h3>{{this.monthlyImage.date}}</h3>
      <img class="nasa-pic" v-bind:src="`${this.monthlyImage.hdurl}`" alt="nasa-image-of-the-day" />
      <p>{{this.monthlyImage.explanation}}</p>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import { getImageOfTheMonth } from "../apiCalls";
export default {
  name: "ImageOfTheMonth",
  props: {
    msg: Object
  },
  data() {
    let date = new Date().toISOString().slice(0, 10);
    let month = date.slice(0, 8);
    let day = date.slice(8, 10);
    let text = "";
    let index;
    for (index = 1; index < day; index++) {
      text += `${month}${index},`;
    }
    let returnAllDates = text.split(",");
    return {
      dates: returnAllDates,
      monthlyImage: {}
    };
  },
  methods: {
    async selectDate($event) {
      let choosenDate = $event.target.value;
      let picture = await getImageOfTheMonth(choosenDate);
      this.monthlyImage = picture;
    }
  }
};
</script>

<style scoped>
.nasa-pic {
  height: 350px;
  width: 350px;
}

.choose-date {
  background-color: white;
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
}
option {
  color: black;
}

.flex {
  display: flex;
  justify-content: center;
}
</style>