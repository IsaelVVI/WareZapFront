<template>
    <div class="grid grid-cols-3 p-2 xl:px-10 xl:py-6 bg-white dark:bg-background dark:max-xl:border-b dark:max-xl:mb-2">
      <Menu @click="openSideBar()" class="xl:hidden" :size="25" />
      <div class="flex items-center justify-center">
        <span class="font-anton select-none cursor-pointer">Logo da Loja</span>
      </div>
      <div class="max-xl:hidden">
        <div class="bg-foreground/5 pr-5 relative rounded-md flex items-center justify-between">
          <input class="h-10 p-2 flex-1 bg-transparent outline-none text-xs " placeholder="Pesquisar produto...">
          <Search class="cursor-pointer absolute right-2 stroke-foreground/30" :size="20" />
        </div>
      </div>
      <div class="flex items-center max-xl:justify-end gap-2 xl:px-4 xl:gap-8">
        <div class="max-xl:hidden flex items-center gap-2">
          <Button @click="openModalRegister()" variant="link">Cadastre-se</Button>
          <Button @click="openModalLogin()" class="px-8">Entrar</Button>
        </div>
        <Search class="xl:hidden stroke-foreground/30" />
        <!-- Carrinho -->
        <div class="flex items-center justify-center">
          <Cart @click="openCart()" class="cursor-pointer" />
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
import {Menu, Search, ShoppingCart as Cart} from 'lucide-vue-next'


const common = useCommon()
const modals = useModals()


const theme = useColorMode()
theme.value = 'light'



const openCart = () => {
  common.shop_cart = true
}

const openSideBar = () => {
  common.sidebar = !common.sidebar
}


const openModalLogin = () => {
  modals.login = true
}

const openModalRegister = () => {
  modals.register = true
}
</script>