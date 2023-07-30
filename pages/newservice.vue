<template>
    <div class="h-[100dvh] w-full flex flex-col justify-center items-center">
        <div class="h-[90%] max-md:w-full md:w-[40%] p-4">
            <div class="w-full text-center">
                <span class="font-Anton font-bold text-3xl">NOVO SERVIÇO</span>
            </div>
            <form action="" @submit.prevent="registerService()">
                <div class="dsform-control w-full">
                    <label class="dslabel">Titulo</label>
                    <input v-model="new_service.title" type="text" placeholder="Digite o titulo do serviço" class="dsinput dsinput-bordered w-full" />
                    <label class="dslabel">
                        <!-- <span class="dslabel-text-alt">Bottom Left label</span>                         -->
                    </label>
                </div>
                <div class="w-full grid md:grid-cols-2 gap-2">
                    <div class="w-full select-none">
                        <label for="">Selecione um Cliente:</label>
                        <div @click="selectClient" class="relative h-12 w-full bg-slate-100 rounded cursor-pointer hover:bg-slate-300 transition-all flex items-center group p-2">
                            <div class="w-full">
                                <span class="font-medium text-zinc-800/80">Nome: </span>
                                <span>{{ client_selected.name }}</span>
                            </div>
                            <div class="absolute opacity-0 group-hover:opacity-100 transition-all h-full w-14 hover:bg-[#440084]/80 bg-[#440084] right-0 rounded-r flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-dasharray="18" stroke-dashoffset="18" stroke-linecap="round" stroke-width="2"><path d="M12 5V19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="18;0"/></path><path d="M5 12H19"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="18;0"/></path></g></svg>
                            </div>
                        </div>
                    </div>                
                    <div class="w-full select-none">
                        <label for="">Selecione um Dispositivo:</label>
                        <div @click="selectDevice" class="relative h-12 w-full bg-slate-100 rounded cursor-pointer hover:bg-slate-300 transition-all flex items-center group p-2">
                            <div v-if="device_selected" class="w-full">
                                <span class="font-medium text-zinc-800/80">Nome: </span>
                                <span>{{ device_selected.model }}</span>
                            </div>
                            <div v-else class="w-full">
                                <span>Nenhum Selecionado</span>
                            </div>
                            <div class="absolute opacity-0 group-hover:opacity-100 transition-all h-full w-14 hover:bg-[#440084]/80 bg-[#440084] right-0 rounded-r flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-dasharray="18" stroke-dashoffset="18" stroke-linecap="round" stroke-width="2"><path d="M12 5V19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="18;0"/></path><path d="M5 12H19"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="18;0"/></path></g></svg>
                            </div>
                        </div>                        
                    </div>                
                </div>
                <div class="w-full">
                    <label class="dslabel">
                        <span class="dslabel-text">Descrição</span>
                    </label>
                    <textarea v-model="new_service.description" class="dstextarea dstextarea-bordered h-10 w-full bg-zinc-100 border-black/10 rounded" placeholder="Descrição do serviço"></textarea>
                </div>
                <div class="w-full grid grid-cols-2 gap-2">
                    <div class="w-full">
                        <label for="" class="text-xs pl-1">Data de inicio</label>
                        <input v-model="initial_date" type="date" class="h-10 w-full p-2 rounded bg-zinc-100 outline-black/20">
                    </div>
                    <div class="w-full">
                        <label for="" class="text-xs pl-1">Valor:</label>
                        <input v-model="new_service.value" type="text" v-maska data-maska="#.###.###,##" data-maska-reversed="true" class="h-10 w-full p-2 rounded bg-zinc-100 outline-black/20" placeholder="R$ 0,00">
                    </div>
                </div>
                <div class="w-full">
                    <label for="" class="text-xs pl-1 flex items-center py-2 gap-2">
                        <span>Entrada:</span>  <input @change="changeEntry" type="checkbox" class="dstoggle dstoggle-primary h-6 checked:border-[#440084] checked:bg-[#440084]" />
                    </label>
                    <input v-model="new_service.entry" :disabled="!has_entry" v-maska data-maska="#.###.###,##" data-maska-reversed="true" type="tel" :class="!has_entry && 'cursor-not-allowed'" class="h-10 w-full p-2 rounded bg-zinc-100 outline-black/20" placeholder="R$ 0,00">
                    <label for="" class="text-xs pl-1 text-red-500 font-sans">OBS: Caso o serviço não tenha entrada deixar em branco</label>
                </div>
                <div class="w-full">
                    <label for="" class="text-sm pl-1">WhatsApp a ser notificado</label>
                    <input v-model="new_service.whatsapp_notify" v-maska data-maska="(##) 9 ####-####" type="tel" class="h-10 w-full p-2 bg-zinc-100 rounded" placeholder="(85) 9 99689-1288">
                    <label for="" class="text-xs text-red-500 font-sans">OBS: WhatsApp que será notificado sobre as atualizações</label>
                </div>
                <div class="w-full grid grid-cols-2 gap-2 mt-2">
                    <button class="dsbtn dsbtn-error text-white block">
                        Cancelar
                    </button>
                    <button type="submit" class="dsbtn bg-[#440084] hover:bg-[white] text-white hover:text-[#440084]">
                        Criar
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { format } from 'date-fns';
definePageMeta({
    name: 'new-service'
})

const client_selected = useClientSelected()
const device_selected = useDeviceSelected()


const new_service = ref({
    title: '',
    description: '',
    complete: false,
    value: '',
    entry: null,
    whatsapp_notify: ''
})

const initial_date = ref(format(new Date(), 'yyyy-MM-dd'))

watch(initial_date, () => {
    console.log(initial_date);
})

const has_entry = ref(false)

watch(useClientSelected(), () => {
    searchDevices()
})

const changeEntry = (e) => {
    has_entry.value = !has_entry.value
}

const selectClient = () => {
    useSelectClient().value = true
}

const selectDevice = () => {
    useSelectDevice().value = true
}

const searchCLients = async () => {
    const {data, error} = await useFetch('client',{
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
        useAllClients().value = data.value.clients
        useClientSelected().value = useAllClients().value[useAllClients().value.length - 1]
        await searchDevices()
        console.log(useClientSelected().value);
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
        useDeviceSelected().value = useAllDevices().value[useAllDevices().value.length - 1]
        console.log(useClientSelected().value);
    }
}

const registerService = async () => {
    if(has_entry){
        new_service.value.entry = brlToFloat(new_service.value.entry)
    }else{
        new_service.value.entry = null
    }
    
    new_service.value.value = brlToFloat(new_service.value.value)
    new_service.value.whatsapp_notify = formatarNumeroTelefone(new_service.value.whatsapp_notify)
    
    const {data, error} = await useFetch('service', {
        method: 'post',
        baseURL: 'http://localhost:3000',
        headers: {
            Authorization: `Bearer ${useToken().value}`
        },
        body: {
            ...new_service.value,
            client_id: client_selected.value.id,
            device_id: device_selected.value.id,
            initial_date: initial_date.value
        }
    })
    
    if (error.value) {
        console.log(error.value);
    }
    
    if (data.value) {
        console.log(data.value);
        new_service.value = {
            complete: false,
            description: '',
            entry: null,
            title: '',
            value: '',
            whatsapp_notify: ''
        }
    }
    
}

const brlToFloat = (valorBRL) => {
  // Remover todos os caracteres não numéricos, exceto a vírgula decimal
  const regexNumeros = /[^\d,]/g;
  const valorNumerico = valorBRL.replace(regexNumeros, '');

  // Substituir a vírgula decimal por ponto
  const valorComPonto = valorNumerico.replace(',', '.');

  // Converter o valor em float
  const valorFloat = parseFloat(valorComPonto);

  return valorFloat;
}

const formatarNumeroTelefone = (telefone) => {
  const regexNumeros = /\d/g;
  const numeros = telefone.match(regexNumeros).join('');
  return numeros;
}

onMounted(async () => {
    await searchCLients()
})

</script>
