<template>
  <div id="home">
    <img class="nasa-logo" src="@/assets/nasa-selfie.png" />
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
  color: $dark-gray;
  margin-top: 80px;
  font-size: 42px;
  font-weight: 500;
  text-align: center;
  font-family: "Open Sans";
}
h4 {
  color: black;
  font-size: 32px;
  font-weight: 300;
}

.arrow {
  width: 50px;
  height: 50px;
}

.nasa-logo {
  width: 400px;
  height: 400px;
  margin-top: 20px;
  border-radius: 500px;
}
</style>