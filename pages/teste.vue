<template>
    <div class="flex justify-center items-center h-full w-full">
        <div class="bg-black/10 h-[50%] w-[50%] flex flex-col justify-center items-center">
            <svg v-if="!img" xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></g></svg>
            <svg v-if="img == 'connected'" xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 24 24"><g stroke="green" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="green" fill-opacity="0" stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"/></path><path fill="none" stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"/></path></g></svg>
            <img v-if="img && img !== 'connected'" :src="img" alt="">
            <!-- <code>{{ img }}</code> -->
            <div @click="sendMessage" class="h-10 w-fit p-2 mt-2 bg-blue-400 flex justify-center items-center rounded select-none cursor-pointer">
                <span class="font-bold text-white">Enviar Menssagem</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import QRCode from 'qrcode'

const { $io } = useNuxtApp()

$io.connect()

const img = ref('')

const socket = $io

const temp_id = ref('')

socket.on('send_qr', async (message) => {
    console.log(message);
    img.value = await generateQR(message)
    // img.value = message
})
socket.on('connected_ws', (message) => {
    img.value = 'connected'
    console.log(message);
})

socket.on('sendmessage', (message) => {
    console.log(message);
})

const sendMessage = async () => {
    // socket.emit('send_message', temp_id.value)
    const token = localStorage.getItem('token')
    const {data, error} = await useFetch('/whatsapp/send-message', {
        baseURL: 'http://localhost:3000/',
        method: 'post',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    
    if (error.value) {
        console.log('Erro ao enviar mensagem');
    }
    
    if (data.value) {
        console.log(data.value);
    }
    
}


const generateQR = async text => {
  try {
    const qr = await QRCode.toDataURL(text)
    return qr
  } catch (err) {
    console.error(err)
    return ''
  }
}

const getUser = async () => {
    const token = localStorage.getItem('token')
    const { data, error } = await useFetch('/me', {
        baseURL: 'http://localhost:3000',
        method: 'get',
        headers: {
          Authorization: `Bearer ${token}`  
        },
    })
    
    if (error.value) {
        console.log(error.value);
    }
    
    if (data.value) {
        socket.emit('getqr', data.value.id)
        return data.value.id
    }
}

onMounted(async () => {
    temp_id.value = await getUser()    
})


</script>