<template>
    <dialog id="modal_selectclient" class="dsmodal">
        <div method="dialog" class="dsmodal-box select-none">
            <h3 class="font-bold text-lg">Selecionar Cliente</h3>
            <div class="w-full flex items-center">
                <input v-model="name_or_phone" type="text" class="h-10 bg-slate-100 w-full p-2 outline-[#440084]" placeholder="Pesquisar Nome/Número">
                <div class="h-10 w-10 bg-[#440084] rounded-r flex justify-center items-center cursor-pointer hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><g fill="none" stroke="white" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M10.5 13.5L3 21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"/></path><path stroke-dasharray="40" stroke-dashoffset="40" d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="40;0"/></path></g></g></svg>
                </div>
            </div>
            <div class="w-full mt-2 bg-slate-100 h-[50dvh] overflow-y-auto p-4 space-y-2">
                <div v-for="client in filtered_clients" class="relative w-full h-12 bg-slate-300 flex items-center p-1 rounded">
                    <div @click="showclient(client)" class="cursor-pointer h-full w-10 bg-[#440084] rounded flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path fill="white" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/></g></svg>
                    </div>
                    <span class="max-md:w-[75%] md:w-full bg-slate-200 truncate py-2 pl-2">
                        {{client.name}}
                    </span>
                    <div @click="selectNewClient(client)" class="dsbtn border-none absolute right-0 w-16 flex justify-center items-center rounded-none bg-[#440084] h-full text-white rounded-r-sm">
                        <span class="text-xs font-medium">Selecionar</span>
                    </div>
                </div>  
            </div>
            <div class="dsmodal-action">
                <!-- if there is a button in form, it will close the modal -->
                <button @click="closeModal" class="dsbtn">Fechar</button>
            </div>
        </div>
    </dialog>
    <dialog id="modal_showclient" class="dsmodal">
        <form method="dialog" class="dsmodal-box space-y-2 rounded-none">
            <div class="w-full p-2 bg-zinc-600/10 rounded text-center">
                <h3 class="font-bold text-lg">{{ temp_client.name }}</h3>                
            </div>
            <div class="grid grid-cols-2">
                <span class="h-full w-full bg-zinc-300/20 py-1 pl-2">Telefone/WhatsApp: </span><span class="h-full w-full bg-zinc-300/20 py-1 truncate">{{temp_client.phone}}</span>
                <span class="h-full w-full bg-zinc-300/20 py-1 pl-2">Telefone/WhatsApp 2: </span><span class="h-full w-full bg-zinc-300/20 py-1 truncate">{{temp_client.phone_secondary}}</span>
                <!-- <span class="h-full w-full bg-zinc-300/20 py-1 pl-2">Ultimo Aparelho: </span><span class="h-full w-full bg-zinc-300/20 py-1 truncate">{{  }}</span> -->
            </div>
            <div class="grid grid-cols-2 gap-2">
                <button @click="() => {}" class="dsbtn dsbtn-block dsbtn-error border-none text-white">
                Cancelar
            </button>
                <button @click="() => {}" class="dsbtn dsbtn-block bg-[#440084] border-none text-white">
                Selecionar
            </button>
            </div>
        </form>
        <form method="dialog" class="dsmodal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>

<script setup>

const filtered_clients = ref([])
const name_or_phone = ref('')

const temp_client = ref({})

watch(name_or_phone, () => {
    if(name_or_phone.value.length > 2){
        filtered_clients.value = useAllClients().value.filter(e => e.name.toLowerCase().includes(name_or_phone.value.toLowerCase()))
    }else{
        filtered_clients.value = useAllClients().value
    }
})

const selectNewClient = (client) => {
    useClientSelected().value = client
    closeModal()
}

const showModal = () => {
  const modal = document.querySelector('#modal_selectclient')
  modal.showModal()
}

const closeModal = () => {
  const modal = document.querySelector('#modal_selectclient')
  modal.close()
  useSelectClient().value = false
}

const showclient = (client) => {
    temp_client.value = client
    const modal = document.querySelector('#modal_showclient')
    modal.showModal()
}

onMounted(() => {
    showModal()
    filtered_clients.value = useAllClients().value
})

</script>