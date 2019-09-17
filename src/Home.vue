<template>
  <div id="home">
    <h2>Welcome to NASA images</h2>
    <h4>
      Click one of the links above to begin
      <img class="arrow" src="@/assets/arrow.png" />
    </h4>
  </div>
</template>


<style lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

h2 {
  color: $light-blue;
  margin-top: 80px;
  font-size: 48px;
  text-align: center;
}
h4 {
  color: black;
  font-size: 32px;
  margin-bottom: 280px;
}
.arrow {
  width: 50px;
  height: 50px;
}
</style>