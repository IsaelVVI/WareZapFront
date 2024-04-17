<template>
  <!-- Componentes -->
  <LoginModalComponent />
  <RegisterModalComponent />
  <ShopCartComponent/>
  <div ref="el" class="h-screen w-full bg-foreground/5 overflow-y-auto scrollbar-none">
<!-- Header   -->
    <header :class="scrolled_el ? 'shadow-lg': ''" class="sticky top-0 z-40">
      <HeaderComponent />
      <MenuNavComponent class="max-xl:hidden" />
    </header>
<!--  Sidebar  -->
    <SidemenuComponent />
<!--  Carousel  -->
    <div v-if="pages_carousel.includes(<string>route.name)" class="max-xl:h-48 h-96 mt-2 w-full">
      <CarouselComponent />
    </div>
    <div class="w-full flex items-center justify-center">
      <div class="max-w-7xl w-full mt-4">
        <slot />
      </div>
    </div>
    <div class="h-44 w-full bg-foreground dark:bg-background/5 mt-14 p-4">
      <span class="text-background dark:text-foreground">
        <!-- Footer Exemplo -->
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">

const colormode = useColorMode()
// colormode.value = 'light'

const route = useRoute()

const pages_carousel = [
    'index'
]

// logica para verificar se o usuario realizou o scroll

// pegando os elementos do DOM, posição do scroll atual e booleano para verificação do eixo y
const el = ref<HTMLElement | null>(null)
const { x, y, isScrolling, arrivedState, directions } = useScroll(el)

// escuta se o usuario escrolou o elemento no eixo y
const scrolled_el = computed(() => {
//  caso o scroll passe dos 50 a sombra no elemento deve ser exibida
  if(y.value > 50) {
    console.log('maior')
    return true
  }

//  caso o scroll seja inferior a 50 a sombra no elemento deve ser oculta
  return false
})

</script>

<style scoped>

</style>