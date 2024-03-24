<template>
  <div class="w-full px-2 space-y-4">
    <nav>
      <ul class="flex items-center space-x-2 text-xs">
        <li class="cursor-pointer hover:font-bold">Home /</li>
        <li class="cursor-pointer hover:font-bold">Produtos /</li>
        <li class="cursor-pointer hover:font-bold">Categoria /</li>
        <li class="font-bold">Nome do produto</li>
      </ul>
    </nav>
    <div class="w-full grid max-xl:grid-cols-1 grid-cols-2 gap-6">
<!--  Imagens do produto    -->
      <div class="w-full flex flex-col items-center justify-center space-y-4">
        <div class="max-xl:h-96 h-[40rem] w-full">
          <img
              class="h-full aspect-square"
              src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/394286/19/sv01/fnd/BRA/w/1000/h/1000/fmt/png"
              alt="imagem do produto"
          >
        </div>
<!--     transformar depois em um carrosel   -->
        <div class="h-32 w-full flex items-center space-x-4 overflow-x-auto scrollbar">
          <img
              v-for="i in 10"
              class="h-full aspect-square"
              src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/394286/19/sv01/fnd/BRA/w/1000/h/1000/fmt/png"
              alt="imagem do produto"
          >
        </div>
      </div>
<!--  Informações do produto    -->
      <div class="flex flex-col space-y-4 border-b pb-6">
<!--    header produto    -->
        <div>
          <h1 class="font-bold max-xl:text-2xl text-4xl text-start">
            Tênis Nike Revolution 6 Next Nature Masculino
          </h1>
          <sub>
            informações do produto
          </sub>
        </div>
<!--    Valor    -->
        <div class="flex items-end gap-2">
          <span class="text-sm">
            R$ <b class="text-3xl font-black">219</b>,00
          </span>
          <span class="text-sm text-foreground/10 font-bold line-through">
            R$ 219,00
          </span>
        </div>
<!--     Descrição   -->
        <div>
          <b class="text-sm text-foreground/60">
            Descrição do produto
          </b>
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
<!--     Mais Infos   -->
        <div class="space-y-2">
          <div class="flex flex-col py-2 space-y-1">
            <b class="text-sm text-foreground/60">
              Tamanho
            </b>
            <sub>Selecione um tamanho</sub>
          </div>
          <div class="flex items-center gap-4">
<!--         Vai virar componente   -->
            <Button variant="outline" class="rounded">
              39
            </Button>
            <Button variant="outline" class="rounded">
              40
            </Button>
            <Button variant="outline" class="rounded">
              41
            </Button>
            <Button variant="outline" class="rounded">
              42
            </Button>
          </div>
        </div>
        <div class="space-y-2">
          <div class="flex flex-col py-2 space-y-1">
            <b class="text-sm text-foreground/60">
              Cor
            </b>
            <sub>Selecione uma cor</sub>
          </div>
          <div class="flex items-center gap-4">
<!--         Vai virar componente   -->
            <Button variant="outline" class="rounded-full h-8 w-8 bg-blue-500">
            </Button>
            <Button variant="outline" class="rounded-full h-8 w-8 bg-red-500 opacity-50">
            </Button>
            <Button variant="outline" class="rounded-full h-8 w-8 bg-yellow-500 opacity-50">
            </Button>
            <Button variant="outline" class="rounded-full h-8 w-8 bg-black-500 opacity-50">
            </Button>
          </div>
        </div>
<!--     Realizar Compra   -->
        <div>
          <Button class="px-12">
            Comprar
          </Button>
        </div>
      </div>
    </div>
<!-- Produtos Relacionados   -->
    <div class="space-y-4">
      <h3 class="font-bold text-foreground/70">Produtos Relacionados</h3>
      <div class="w-full grid max-xl:grid-cols-2 grid-cols-5 gap-4">
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
definePageMeta({
  name: 'show-product'
})

const temp = useTemp()

</script>

<style scoped>

</style>