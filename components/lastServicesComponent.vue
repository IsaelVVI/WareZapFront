<template>
    <div class="w-max md:w-full">
        <table class="dstable">
            <!-- head -->
            <thead class="text-center">
                <tr>
                    <th>
                        <!-- <label>
                            <input type="checkbox" class="dscheckbox" />
                        </label> -->
                    </th>
                    <th>Cliente</th>
                    <th>Serviço</th>
                    <th>Aparelho</th>
                    <th>
                        <button class="dsbtn dsbtn-sm bg-[#440084] hover:text-[#440084] w-24 transition-all rounded text-white font-bold">Ver Todos</button>
                    </th>
                </tr>
            </thead>
            <tbody class="text-center">
                <!-- row 1 -->
                <tr v-for="service in all_services" :key="service.id">
                    <th>
                        <!-- <label>
                            <input type="checkbox" class="dscheckbox" />
                        </label> -->
                    </th>
                    <td>
                        <div class="flex items-center space-x-3">
                            <div class="dsavatar">
                                <div class="dsmask dsmask-squircle w-12 h-12">
                                    <img src="../assets/images/warezap.png"
                                        alt="Avatar Tailwind CSS Component" />
                                    <!-- <img src="https://cdn.pixabay.com/photo/2023/01/22/11/49/girl-7736189_1280.jpg"
                                        alt="Avatar Tailwind CSS Component" /> -->
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">{{service.client.name}}</div>
                                <div v-if="service.complete" class="text-xs p-1 bg-green-500 text-white rounded-md text-center font-bold">COMPLETO</div>
                                <div v-else class="text-xs p-1 bg-yellow-500 text-white rounded-md text-center font-bold">PENDENTE</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {{service.title}}
                        <br />
                        <span class="py-3 dsbadge dsbadge-ghost dsbadge-sm w-full rounded-md bg-slate-700 text-white">{{formatDate(service.initial_date)}}</span>                        
                    </td>
                    <td>
                        {{ service.device.model }}
                        <br />
                        <span class="py-3 dsbadge dsbadge-ghost dsbadge-sm w-full rounded-md bg-slate-700 text-white">{{service.device.brand.toUpperCase()}}</span>
                    </td>
                    <th>
                        <button @click="showModalDevice(service)" class="dsbtn dsbtn-sm bg-[#440084] hover:text-[#440084] transition-all rounded text-white font-bold">Detalhes</button>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
    <dialog id="modal_device" class="dsmodal">
        <form v-if="temp_service.client" method="dialog" class="dsmodal-box rounded">
        <div class="w-full text-center">
            <h3 class="font-bold text-lg">Serviço</h3>
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
                <div>Cliente: </div>
                <div>{{ temp_service.client.name }}</div>                
            </div>
            <div class="flex items-center gap-2">
                <div>Serviço: </div>
                <div>{{ temp_service.title }}</div>                
            </div>
            <div class="w-full flex items-center gap-2">
                <div>Dispositivo: </div>
                <div>{{ temp_service.device.model }}</div>
            </div>
            <div class="flex flex-col items-start gap-2">
                <div>Descrição: </div>
                <div class="bg-zinc-100 rounded w-full p-2 text-sm">{{ temp_service.description }}</div>                
            </div>
        </div>
        <div class="dsmodal-action">
            <!-- if there is a button in form, it will close the modal -->
            <button class="dsbtn">Fechar</button>
        </div>
        </form>
    </dialog>
</template>

<script setup>
import { format } from 'date-fns';


const all_services = ref([])

const temp_service = ref({})

const formatDate = (date) => {
    if(date){
        return format(new Date(date), 'dd/MM/yyyy')
    }
}

const searchLastServices = async () => {
    const {data, error} = await useFetch('service', {
        method: 'get',
        baseURL: 'http://localhost:3000',
        headers: {
            Authorization: `Bearer ${useToken().value}`
        }
    })
    
    if (error.value) {
        console.log(error.value);
    }
    
    if (data.value) {
        all_services.value = data.value
    }
}

const showModalDevice = (service) => {
    temp_service.value = service
    const modal = document.querySelector('#modal_device')
    modal.showModal()
}

onMounted( async () => {
    await searchLastServices()
})

</script>