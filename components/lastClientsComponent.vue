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
                    <th class="text-start">Nome</th>
                    <!-- <th>Telefone</th> -->
                    <th>Ultimo Aparelho</th>
                    <th>
                        <button class="dsbtn dsbtn-sm bg-[#440084] hover:text-[#440084] w-24 transition-all rounded text-white font-bold">Ver Todos</button>
                    </th>
                </tr>
            </thead>
            <tbody class="text-center">
                <!-- row 1 -->
                <tr v-for="client in last_clients" :key="client.id">
                    <th>
                        <!-- <label>
                            <input type="checkbox" class="dscheckbox" />
                        </label> -->
                    </th>
                    <td>
                        <div class="flex items-center space-x-3">
                            <!-- <div class="dsavatar">
                                <div class="dsmask dsmask-squircle w-12 h-12">
                                    <img src="https://cdn.pixabay.com/photo/2023/01/22/11/49/girl-7736189_1280.jpg"
                                        alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div> -->
                            <div class="w-max">
                                <div class="font-bold">{{ client.name }}</div>
                                <!-- <div class="text-sm bg-green-700 text-white rounded-md text-center font-bold">CREDITO</div> -->
                            </div>
                        </div>
                    </td>
                    <!-- <td> -->
                        <!-- Trocar a Tela que trincou -->
                        <!-- <br /> -->
                        <!-- <span class="select-none dsbadge dsbadge-ghost dsbadge-sm w-full rounded-md bg-slate-700 text-white truncate">(85) 9 968*-****</span> -->
                    <!-- </td> -->
                    <td class="select-none">
                        <span v-if="client.devices.length">
                            <span class="bg-[#440084] px-4 py-1 text-white rounded">{{ client.devices[client.devices.length - 1].model }}</span>
                        </span>
                        <span v-else class="text-xs bg-[#440084] text-white px-4 py-1 rounded">
                            Nenhum...
                        </span>
                    </td>
                    <th>
                        <button @click="showClient(client)" class="dsbtn dsbtn-sm bg-[#440084] hover:text-[#440084] transition-all rounded text-white font-bold">Detalhes</button>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
    <dialog id="modal_clients" class="dsmodal">
        <form v-if="temp_client.id" method="dialog" class="dsmodal-box">
            <h3 class="font-bold text-lg">Cliente</h3>
            <div class="w-full bg-zinc-200 rounded flex flex-col p-4">
                <div class="w-full flex items-center gap-2">
                    <span>Nome: </span>
                    <div>{{ temp_client.name }}</div>
                </div>
                <div class="w-full flex items-center gap-2">
                    <span>Telefone: </span>
                    <div>{{ formatarNumeroTelefone(temp_client.phone) }}</div>
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

const last_clients = ref([])
const temp_client = ref({})

const lastClients = async () => {
    const {data, error} = await useFetch('client', {
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
        console.log(data.value);
        last_clients.value = data.value
    }
    
}


const showClient = (client) => {
    temp_client.value = client
    const modal = document.querySelector('#modal_clients')
    modal.showModal()
}

const formatarNumeroTelefone = (numero) => {
  // Remover todos os caracteres não numéricos
  const regexNumeros = /\d/g;
  const numeros = numero.match(regexNumeros).join('');

  // Obter os primeiros dígitos (código de área e dígito 9)
  const primeirosDigitos = numeros.slice(0, 2) + numeros.slice(2, 3);

  // Obter os 4 dígitos do meio
  const digitosDoMeio = numeros.slice(3, 7);

  return `(${primeirosDigitos}) ${digitosDoMeio}-****`;
}


onMounted(async () => {
    await lastClients()
})

</script>