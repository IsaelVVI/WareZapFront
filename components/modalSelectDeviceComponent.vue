<template>
<dialog id="modal_selectdevice" class="dsmodal">
    <div method="dialog" class="dsmodal-box select-none">
        <h3 class="font-bold text-lg">Selecionar Dispositivo</h3>
        <div class="w-full flex items-center">
            <input type="text" class="h-10 bg-slate-100 w-full p-2 outline-[#440084]" placeholder="Pesquisar Dispositivo">
            <div class="h-10 w-10 bg-[#440084] rounded-r flex justify-center items-center cursor-pointer hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><g fill="none" stroke="white" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M10.5 13.5L3 21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"/></path><path stroke-dasharray="40" stroke-dashoffset="40" d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="40;0"/></path></g></g></svg>
            </div>
        </div>
        <div class="w-full mt-2 bg-slate-100 h-[50dvh] overflow-y-auto p-4 space-y-2">
            <div v-for="device in all_devices" class="relative w-full h-12 bg-slate-300 flex items-center p-1 rounded">
                <div class="cursor-pointer h-full w-10 bg-[#440084] rounded flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><g transform="translate(256 0) scale(-1 1)"><path fill="white" d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24ZM80 32h96a8 8 0 0 1 8 8v8H72v-8a8 8 0 0 1 8-8Zm96 192H80a8 8 0 0 1-8-8v-8h112v8a8 8 0 0 1-8 8Z"/></g></svg>
                </div>
                <span class="max-md:w-[75%] md:w-full bg-slate-200 truncate py-2 pl-2">
                    {{device.model}}
                </span>
                <div @click="SelectDevice(device)" class="dsbtn border-none absolute right-0 w-16 flex justify-center items-center rounded-none bg-[#440084] h-full text-white rounded-r-sm">
                    <span class="text-xs font-medium">Selecionar</span>
                </div>
            </div>  
        </div>
        <div class="dsmodal-action">
            <!-- if there is a button in form, it will close the modal -->
            <div class="w-full grid grid-cols-2 gap-2">
                <button @click="closeModal" class="dsbtn">Fechar</button>
                <button @click="showModalNewDevice" class="dsbtn bg-[#440084] text-white">
                    Adicionar
                </button>
            </div>
        </div>
    </div>
</dialog>
<dialog id="modal_newdevice" class="dsmodal">
        <form method="dialog" class="dsmodal-box space-y-2 rounded-none">
            <div class="w-full p-2 bg-zinc-600/10 rounded text-center">
                <h3 class="font-bold text-lg">Adicionar Dispositivo</h3>                
            </div>
            <div class="grid grid-cols-2">
                <div class="h-full w-full bg-zinc-300/20 py-1 pl-2 flex justify-start items-center">
                    <span>Marca: </span>
                </div>
                <div class="h-full w-full bg-zinc-300/20 p-1">
                    <input v-model="temp_device.brand" type="text" class="h-12 w-full rounded p-2" placeholder="Digite a marca">
                </div>                
                <div class="h-full w-full bg-zinc-300/20 py-1 pl-2 flex justify-start items-center">
                    <span>Modelo: </span>
                </div>
                <div class="h-full w-full bg-zinc-300/20 p-1">
                    <input v-model="temp_device.model" type="text" class="h-12 w-full rounded p-2" placeholder="Digite o modelo">
                </div>
                <div class="h-full w-full bg-zinc-300/20 py-1 pl-2 flex justify-start items-center">
                    <span>Cliente: </span>
                </div>
                <div class="h-full w-full bg-zinc-300/20 p-1">
                    <input disabled type="text" class="h-12 w-full rounded p-2" :value="useClientSelected().value.name">
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <button @click="() => {}" class="dsbtn dsbtn-block dsbtn-error border-none text-white">
                    Cancelar
                </button>
                <button @click="newDevice" class="dsbtn dsbtn-block bg-[#440084] border-none text-white">
                    Adicionar
                </button>
            </div>
        </form>
        <form method="dialog" class="dsmodal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>

<script setup>
const all_devices = useAllDevices()
const temp_device = ref({
    brand: '',
    model: ''
})

const newDevice = async () => {
    const {data, error} = await useFetch('device', {
        method: 'post',
        baseURL: 'http://localhost:3000',
        headers: {
            Authorization: `Bearer ${useToken().value}`
        },
        body: {
            ...temp_device.value,
            client_id: useClientSelected().value.id
        }
    })
    
    if (error.value) {
        alert('erro ao realizar cadastro de dispositivo')
    }
    
    if (data.value) {
        await searchDevices()
        temp_device.value = {
            brand: '',
            model: ''
        }
        const modal = document.querySelector('#modal_newdevice')
        modal.close()
    }
    
}

const searchDevices = async () => {
    const {data, error} = await useFetch(`device/${useClientSelected().value.id}`,{
        method: 'get',
        baseURL: 'http://localhost:3000/',
        headers: {
            Authorization: `Bearer ${useToken().value}`
        }
    })
    
    if (error.value) {
        console.log(error.value);
    }
    
    if(data.value){
        useAllDevices().value = data.value
    }
}

const SelectDevice = (device) => {
    useDeviceSelected().value = device
    closeModal()
}

const showModal = () => {
  const modal = document.querySelector('#modal_selectdevice')
  modal.showModal()
}

const closeModal = () => {
  const modal = document.querySelector('#modal_selectdevice')
  modal.close()
  useSelectDevice().value = false
}


const showModalNewDevice = () => {
    const modal = document.querySelector('#modal_newdevice')
    modal.showModal()
}

onMounted(() => {
    showModal()
})
</script>