<template>
  <dialog id="modal_newclient" class="dsmodal">
    <div class="dsmodal-box rounded">
      <div class="w-full text-center">
        <h3 class="font-black text-xl font-Anton">Novo Cliente</h3>          
      </div>
      <form action="" class="w-full" @submit.prevent="registerNewClient">
        <div class="dsform-control w-full">
          <label class="dslabel">
            <span class="dslabel-text text-xs">Nome do Cliente</span>
          </label>
          <input v-model="new_client.name" type="text" placeholder="Nome do cliente: " class="dsinput dsinput-bordered w-full" />
          <label class="dslabel">
            <!-- <span class="dslabel-text-alt text-xs">Obrigatorio</span> -->
          </label>
          <label class="dslabel">
            <span class="dslabel-text text-xs">Telefone/WhatsApp</span>
          </label>
          <input v-model="new_client.phone" type="text" placeholder="Telefone: " class="dsinput dsinput-bordered w-full" />
          <label class="dslabel">
            <!-- <span class="dslabel-text-alt text-xs">Obrigatorio</span> -->
          </label>
          <label class="dslabel">
            <span class="dslabel-text text-xs">Telefone/WhatsApp 2</span>
            <span class="text-red-600 text-xs">Opcional</span>
          </label>
          <input v-model="new_client.phone_secondary" type="text" placeholder="Telefone: " class="dsinput dsinput-bordered w-full" />
          <label class="dslabel">
            <!-- <span class="dslabel-text-alt text-xs">Obrigatorio</span> -->
          </label>
          <!-- <label class="dslabel">
            <span class="dslabel-text text-xs">Aparelho</span>
          </label>
          <input type="text" placeholder="Modelo do Aparelho:" class="dsinput dsinput-bordered w-full" />
          <label class="dslabel"> -->
            <!-- <span class="dslabel-text-alt text-xs -translate-y-2">Digite o modelo do aparelho</span> -->
          <!-- </label> -->
        </div>   
        <div class="dsmodal-action">
          <!-- if there is a button in form, it will close the modal -->
          <button @click="closeModal()" class="dsbtn dsbtn-error text-white rounded">Cancelar</button>
          <button type="submit" class="dsbtn bg-[#440084] hover:text-[#440084] text-white rounded">Cadastrar</button>
        </div>
      </form>
    </div>
  </dialog>
  <dialog id="modal_newservice" class="dsmodal">
  <form method="dialog" class="dsmodal-box">
    <h3 class="font-bold text-lg">Cadastrar Novo Serviço?</h3>
    <p class="py-4">Deseja cadastrar um novo serviço para esse cliente?</p>
    <div class="w-full grid grid-cols-2 gap-2">
      <button onclick="modal_newservice.close()" class="dsbtn dsbtn-error text-white rounded">Não</button>
        <button onclick="modal_newservice.close()" class="dsbtn bg-[#440084] hover:text-[#440084] text-white rounded">Sim</button>
    </div>
  </form>
</dialog>
</template>

<script setup>

const new_client = ref({
  name: '',
  phone: '',
  phone_secondary: ''
})

const showModal = () => {
  const modal = document.querySelector('#modal_newclient')
  modal.showModal()
}

const closeModal = () => {
  const modal = document.querySelector('#modal_newclient')
  modal.close()
  useNewClient().value = false
}

const newServiceModal = () => {
  const modal = document.querySelector('#modal_newservice')
  modal.showModal()
}

const registerNewClient = async () => {
  const {data, error} = await useFetch('client', {
    method: 'post',
    baseURL: 'http://localhost:3000/',
    headers: {
      Authorization: `Bearer ${useToken().value}`
    },
    body: {
      ...new_client.value
    }
  })
  
  if (error.value) {
    console.log(error.value);
  }
  
  if(data.value){
    console.log(data.value);
    newServiceModal()    
  }
  
}


onMounted(() => {
  showModal()
})

</script>