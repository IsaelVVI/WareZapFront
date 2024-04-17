<template>
  <div class="w-full px-2 space-y-4">
    <div class="w-full space-y-2">
      <h3 class="font-bold text-foreground/70">
        Destaques
      </h3>
      <div class="w-full pb-4 flex items-center justify-around overflow-x-auto xl:grid xl:grid-cols-3 gap-4">
        <FeaturedComponent v-for="promo in featured_promos" class="min-w-max">
          <img class="h-full w-full rounded-lg"
               :src="promo" loading="lazy" alt="promo">
        </FeaturedComponent>
      </div>
    </div>
    <div class="w-full">
      <div class="flex items-center justify-between py-2">
        <h3 class="font-bold text-foreground/70">
          Mais Vendidos
        </h3>
        <Button variant="outline" class="bg-transparent flex items-center gap-2 ">
          Ver todos
          <ChevronRight class="h-4 w-4" />
        </Button>
      </div>
      <div class="w-full grid max-xl:grid-cols-2 grid-cols-4 gap-6">
        <ProductComponent v-for="item in temp.products"
                          :category="item.category"
                          :title="item.title"
                          :old_price="item.old_price || ''"
                          :price="item.price"
                          :image="item.image"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ChevronRight} from 'lucide-vue-next'
import {useTemp} from "~/stores/temp_store";

definePageMeta({
  name: 'index'
})

const temp = useTemp()

const featured_promos = [
    'https://cdn.sistemawbuy.com.br/arquivos/d2f1f955a670f5b7fd79cbf71498aaea/banners/l87v-6528b4129c5f71.png',
    'https://cdn.sistemawbuy.com.br/arquivos/d2f1f955a670f5b7fd79cbf71498aaea/banners/l87v-6528b4129c5f71.png',
    'https://cdn.sistemawbuy.com.br/arquivos/d2f1f955a670f5b7fd79cbf71498aaea/banners/l87v-6528b4129c5f71.png',
]


</script>

<style scoped>

</style>