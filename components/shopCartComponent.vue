<template>
  <Sheet ref="target" :open="common.shop_cart" :modal="false">
    <div @click="closeModal()" v-if="common.shop_cart"class="fixed h-full w-full bg-black/20 z-[50]">

    </div>
    <SheetContent class="max-xl:min-w-full" :side="'right'">
      <DialogClose
          @click="closeModal()"
          class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
      >
        <X class="w-4 h-4 text-muted-foreground" />
      </DialogClose>
      <!-- Corpo do carrinho -->
      <div class="relative h-full w-full flex flex-col space-y-2 overflow-y-auto scrollbar">
        <div class="sticky top-0 border-b border-black/5">
          <b>
            Carrinho
          </b>
        </div>
        <!-- Produtos -->
        <div class="max-h-full w-full p-2 space-y-2 overflow-y-auto scrollbar">
          <!-- Produto -->
          <div v-for="i in 2" class="w-full grid grid-cols-12 gap-6 p-2 border rounded-md transition-all">
            <div class="col-span-4 h-28 min-w-28 max-w-28 rounded-md border p-1">
              <img class="rounded-md" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/394286/19/sv01/fnd/BRA/w/1000/h/1000/fmt/png" alt="product image">
            </div>
            <div class="col-span-8 relative h-28 w-full	flex items-start p-2">
              <div class="w-full space-y-1">
                <!-- Infos -->
                <h4 title="Aqui vai o nome do produto tal que nao" class="w-[95%] text-xs font-semibold truncate">Aqui vai o nome do produto tal que nao</h4>
                <p class="text-xs">
                  <span class="font-bold text-foreground/70">Info:</span>
                  Cor aquela la
                </p>
                <!-- Quantidades -->
                <div class="w-full flex items-center">
                  <Button variant="outline" class="h-8 w-8 rounded-none">-</Button>
                  <input type="text" value="1" class="h-8 w-8 text-xs font-bold bg-foreground/5 outline-none text-center">
                  <Button variant="outline" class="h-8 w-8 rounded-none">+</Button>
                </div>
                <!-- Preço -->
                <div class="flex items-center justify-end">
                  <h4 class="font-bold">
                    R$ 250,00
                  </h4>
                </div>
              </div>
              <div class="absolute -top-1 -right-1">
                <X class="h-4" />
              </div>
            </div>
          </div>
        </div>
        <div class="h-32  w-full">
          <!-- Pequeno resumo -->
          <div class="grid grid-cols-2 gap-2 p-2 bg-foreground/5 border mb-2 rounded">
            <div class="flex flex-col space-y-2">
              <span class="text-xs font-bold">Desconto</span>
              <span class="text-xs font-bold">Subtotal</span>
            </div>
            <div class="flex flex-col space-y-2 items-end">
              <span class="text-xs font-bold">R$ 0,00</span>
              <span class="text-xs font-bold">R$ 500,00</span>
            </div>
          </div>
          <div class="w-full flex items-center justify-end">
            <Button class="rounded w-full">Finalizar Compra</Button>
          </div>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>
<script setup lang="ts">
import {X} from "lucide-vue-next";
import {DialogClose} from "radix-vue";

const common = useCommon()


const closeModal = () => {
  common.shop_cart = false
}

</script>

<style scoped>

</style>