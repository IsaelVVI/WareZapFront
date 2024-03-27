<template>
    <Dialog :open="modals.login">
        <DialogContent class="w-full xl:w-96">
            <DialogHeader class="relative">
                <DialogTitle>
                    <b>WarezapStore</b>
                </DialogTitle>
                <DialogDescription>
                    Realize o login para acessar sua conta
                </DialogDescription>
                <div class="absolute top-0 right-2">
                    <X @click="closeModal()" class="h-5 w-5 cursor-pointer" />
                </div>
            </DialogHeader>
            <form @submit.prevent="" class="space-y-4">
            <div class="w-full space-y-4">
                    <div class="flex flex-col w-full">
                        <label for="login" class="font-semibold text-sm">Email:</label>
                        <input required type="text" placeholder="email@email.com" class="h-10 w-full text-sm px-2 placeholder:font-light rounded bg-background border">
                    </div>
                    <div class="flex flex-col">
                        <label for="login" class="font-semibold text-sm">Senha:</label>
                        <input required type="password" placeholder="Senha" class="h-10 w-full text-sm px-2 placeholder:font-light rounded bg-background border">
                    </div>
                    <hr class="w-full">
                    <div class="px-2 flex items-center gap-1">
                        <h4 class="text-sm">
                            Novo Cliente?
                        </h4>
                        <Button @click="register()" variant="link" class="px-0 font-semibold">Cadastre-se</Button>
                    </div>
                </div>
                <DialogFooter>
                    <Button>Acessar Conta</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
</template>

<script setup lang="ts">
import {X} from 'lucide-vue-next'

const modals = useModals()


const register = () => {
    modals.register = true
    closeModal()
}

const closeModal = () => {
    modals.login = false
}

</script>