<template>
  <Swiper class="h-full" pagination autoplay :modules="[Pagination, Autoplay]">
    <SwiperSlide v-for="i in 10" :key="i">
      <div class="h-[85%] xl:h-[22rem] flex items-center justify-center">
        <img class="h-full max-w-5xl w-full"
             src="https://www.designi.com.br/images/preview/10057856.jpg"
             alt="banner product">
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<script setup lang="ts">


</script>

<style>
.swiper-pagination-bullet-active {
  color: #fff;
  @apply !bg-foreground;
}

.swiper-pagination {
  @apply xl:translate-y-3;
}

</style>