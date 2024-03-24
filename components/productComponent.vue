<template>
  <div class="w-full xl:flex xl:flex-col xl:items-center">
    <div class="flex items-center bg-white justify-center cursor-pointer xl:hover:shadow-xl xl:hover:scale-110 xl:hover:z-10 delay-100 transition-all w-full rounded-lg border bg-foreground/5">
      <img
          class="h-full w-full aspect-square rounded-lg"
          :src="image"
          alt="product"
      >
    </div>
    <div class="w-full px-2">
      <sub class="font-semibold text-foreground/70">{{category}}</sub>
      <h4 class="truncate text-foreground text-lg">{{ title }}</h4>
      <div class="px-1 max-xl:flex-col flex items-center justify-between">
        <div class="w-full flex flex-col items-start justify-start">
          <span v-if="old_price" class="text-xs line-through text-foreground/30">{{ old_price }}</span>
          <span class="text-sm font-bold whitespace-nowrap">{{ price }}</span>
        </div>
        <Button class="max-xl:w-full active:scale-95 transition-all">
          Adicionar
        </Button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  category: string,
  title: string,
  image: string,
  old_price?: string,
  price: string
}>()


</script>

<style scoped>

</style>