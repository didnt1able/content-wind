<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 50000,
      disableOnInteraction: true,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="/images/Brochure.webp"</swiper-slide>
    <swiper-slide><img src="/images/img_01.jpg"</swiper-slide>
    <swiper-slide><img src="/images/img_02.jpg"</swiper-slide>
    <swiper-slide><img src="/images/img_03.jpg"</swiper-slide>
   
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  import '/components/swiper.css';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>
