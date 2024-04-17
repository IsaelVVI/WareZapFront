<template>
    <Dialog :open="modals.register">
        <DialogContent class="w-full xl:w-96">
            <DialogHeader class="relative">
                <DialogTitle>
                    <!-- <b>WarezapStore</b> -->
                    <b>Logo da Loja</b>
                </DialogTitle>
                <DialogDescription>
                    Realize o seu cadastro
                </DialogDescription>
                <div class="absolute top-0 right-2">
                    <X @click="closeModal()" class="h-5 w-5 cursor-pointer" />
                </div>
            </DialogHeader>
            <form @submit.prevent="" class="space-y-4">
            <div class="w-full space-y-4">
                    <div class="flex flex-col w-full">
                        <label for="name" class="font-semibold text-sm">Nome:</label>
                        <input id="name" required type="text" placeholder="Seu Nome" class="h-10 w-full text-sm px-2 placeholder:font-light rounded bg-background border">
                    </div>
                    <div class="flex flex-col w-full">
                        <label for="login" class="font-semibold text-sm">Email:</label>
                        <input id="login" required type="text" placeholder="email@email.com" class="h-10 w-full text-sm px-2 placeholder:font-light rounded bg-background border">
                    </div>
                    <div class="flex flex-col w-full">
                        <label for="phone" class="font-semibold text-sm">Telefone:</label>
                        <input id="phone" required type="text" placeholder="Telefone" class="h-10 w-full text-sm px-2 placeholder:font-light rounded bg-background border">
                    </div>
                    <div class="flex flex-col">
                        <label for="password" class="font-semibold text-sm">Senha:</label>
                        <input id="password" required type="password" placeholder="Senha" class="h-10 w-full text-sm px-2 placeholder:font-light rounded bg-background border">
                    </div>
                    <div class="flex flex-col">
                        <label for="confirm_password" class="font-semibold text-sm">Confirmar Senha:</label>
                        <input id="confirm_password" required type="password" placeholder="Confirmar Senha" class="h-10 w-full text-sm px-2 placeholder:font-light rounded bg-background border">
                    </div>
                    <hr class="w-full">
                    <div class="px-2 flex items-center gap-1">
                        <h4 class="text-sm">
                            Já tem uma conta?
                        </h4>
                        <Button @click="openLogin()" variant="link" class="px-0 font-semibold">Fazer Login</Button>
                    </div>
                </div>
                <DialogFooter>
                    <Button>Criar Conta</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
</template>

<script setup lang="ts">
import {X} from 'lucide-vue-next'

const modals = useModals()

const openLogin = () => {
    modals.login = true
    closeModal()
}

const closeModal = () => {
    modals.register = false
}

</script>