<template>
  <Sheet ref="target" :open="common.sidebar">
    <SheetContent class="min-w-full" :side="'left'">
      <DialogClose
          @click="common.sidebar = false"
          class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
      >
        <X class="w-4 h-4 text-muted-foreground" />
      </DialogClose>
      <div class="h-full flex flex-col justify-between">
        <div>
          <b>
            Páginas
          </b>
          <MenuOptionsComponent class="flex-col !items-start gap-0" />
        </div>

        <div class="border-t p-4 space-y-2" >
          <Button class="w-full">
            Entrar
          </Button>
          <Button variant="link" class="w-full">
            Cadastre-se
          </Button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>
<script setup lang="ts">
import {X} from "lucide-vue-next";
import {DialogClose} from "radix-vue";

const common = useCommon()




</script>

<style scoped>

</style>