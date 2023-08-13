<template>
    <div class="w-full p-4 space-y-2">
       <div class="w-full">
            <span class="font-semibold text-2xl">Configurações</span>
       </div>
       <div class="w-full rounded border flex flex-col p-4 space-y-2">
        <div class="flex flex-col space-y-2">
            <div class="flex items-center gap-1">
                <span>Notificar serviços no Whatsapp?</span>
                <div class="opacity-80 dstooltip dstooltip-right" data-tip="Enviar notificações no whatsapp">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1Zm-1.108 7.935c.23-.453.4-.668.541-.78c.106-.084.25-.155.567-.155c.625 0 1 .47 1 .978c0 .278-.054.416-.202.592c-.207.246-.59.545-1.348 1.046l-.45.296V13a1 1 0 1 0 2 0v-1.017c.542-.374.997-.732 1.327-1.124c.477-.566.673-1.17.673-1.881C15 7.508 13.867 6 12 6c-.684 0-1.289.176-1.808.587c-.484.383-.814.91-1.084 1.445a1 1 0 1 0 1.784.903ZM13 16.5a1 1 0 1 0-2 0v.5a1 1 0 1 0 2 0v-.5Z" clip-rule="evenodd"/></svg>                                    
                </div>
            </div>
            <div class="flex gap-2">
                <div @click="enable_notify_whatsapp = !enable_notify_whatsapp" :class="enable_notify_whatsapp ? 'bg-green-600': 'bg-red-600'" class="h-8 w-32 rounded flex justify-center items-center cursor-pointer select-none active:scale-95 transition-all">
                    <span v-if="enable_notify_whatsapp" class="text-white">Ativo</span>
                    <span v-else class="text-white">Desativado</span>
                </div>            
                <div v-if="enable_notify_whatsapp" @click="showModalWhatsapp()" class="h-8 w-32 bg-[#440084] rounded flex justify-center items-center cursor-pointer select-none active:scale-95 transition-all">
                    <span class="text-white">Configurar</span>                    
                </div>            
                
            </div>
        </div>
        <div class="flex flex-col space-y-2">
            <div class="flex items-center gap-1">
                <span>Notificar serviços por notificação push?</span>
                <div class="opacity-80 dstooltip dstooltip-right" data-tip="Enviar notificações no aparelho por notificação push">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1Zm-1.108 7.935c.23-.453.4-.668.541-.78c.106-.084.25-.155.567-.155c.625 0 1 .47 1 .978c0 .278-.054.416-.202.592c-.207.246-.59.545-1.348 1.046l-.45.296V13a1 1 0 1 0 2 0v-1.017c.542-.374.997-.732 1.327-1.124c.477-.566.673-1.17.673-1.881C15 7.508 13.867 6 12 6c-.684 0-1.289.176-1.808.587c-.484.383-.814.91-1.084 1.445a1 1 0 1 0 1.784.903ZM13 16.5a1 1 0 1 0-2 0v.5a1 1 0 1 0 2 0v-.5Z" clip-rule="evenodd"/></svg>                                    
                </div>
            </div>
            <div class="flex gap-2">
                <div @click="enable_notify_push = !enable_notify_push" :class="enable_notify_push ? 'bg-green-600': 'bg-red-600'" class="h-8 w-32 rounded flex justify-center items-center cursor-pointer select-none active:scale-95 transition-all">
                    <span v-if="enable_notify_push" class="text-white">Ativo</span>
                    <span v-else class="text-white">Desativado</span>
                </div>
                <div v-if="enable_notify_push" class="h-8 w-32 bg-[#440084] rounded flex justify-center items-center cursor-pointer select-none active:scale-95 transition-all">
                    <span class="text-white">Configurar</span>                    
                </div>
            </div>
        </div>
       </div>
    </div>
    <dialog id="modal_whatsapp" class="dsmodal">
        <form method="dialog" class="dsmodal-box rounded">
            <h3 class="font-bold text-lg text-white">Configurar Whatsapp!</h3>
            <p class="py-4 text-sm">ATENÇÃO: é recomendado utilizar um número secundario de whatsapp</p>
            <div class="dsmodal-action">
            <!-- if there is a button in form, it will close the modal -->
            <button class="dsbtn">Close</button>
            </div>
        </form>
    </dialog>
</template>

<script setup>
const enable_notify_whatsapp = ref(true)
const enable_notify_push = ref(true)


const showModalWhatsapp = () => {
    const modal = document.querySelector('#modal_whatsapp')
    modal.showModal()
}

onMounted(() => {
    showModalWhatsapp()
})
</script>