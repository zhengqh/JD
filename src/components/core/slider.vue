<template>
  <section :class="cname">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, index) in items" :key="index">
        <router-link :to="{ name: item.href }">
          <img :src="item.src" alt="" />
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
// import "swiper/dist/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    cname: {
      type: String,
      default: "",
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: true,
        loop: true,
        // Some Swiper option/callback...
      },
    };
  },
};
</script>

<style>
@import "~swiper/css/swiper.css";
</style>
