<template>
  <nav class="max-w-4xl w-full">
    <ul :class="props.class" class="flex items-center gap-6">
      <li>
        <Button variant="link" class="p-0 underline font-bold">
          Home
        </Button>
      </li>
      <li>
        <Button variant="link" class="p-0">
          Produtos
        </Button>
      </li>
      <li>
        <Button variant="link" class="p-0">
          Categorias
        </Button>
      </li>
      <!-- <li>
        <Button variant="link" class="p-0">
          Meus Pedidos
        </Button>
      </li> -->
    </ul>
  </nav>
</template>
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
}>(), {})



</script>

<style scoped>

</style>