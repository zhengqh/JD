<template>
  <div>
    <homeHeader></homeHeader>
    <homeSlider></homeSlider>
  </div>
</template>

<script>
import homeHeader from "@c/header/Header.vue";
import homeSlider from "./slider/Slider";
export default {
  name: "Home",
  components: {
    homeHeader,
    homeSlider,
  },
};
</script>

<style></style>
