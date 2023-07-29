<template>
    <div class="h-full w-full flex bg-white md:bg-transparent">        
        <div class="hidden h-full w-[70%] bg-white md:flex justify-center items-center">
            <img src="../assets/images/warezap.png" alt="warezap logo">            
        </div>
        <div class="w-full h-full md:w-[30%]">
            <div class="w-full h-full flex flex-col justify-center items-center relative overflow-hidden md:bg-[#440084]">
                <img class="absolute top-0 hidden md:flex" src="../assets/images/warezap2.png" alt="warezap logo">
                <img class="absolute top-0 md:hidden" src="../assets/images/warezap.png" alt="warezap logo">
                <form @submit.prevent="newLogin" class="z-20 flex flex-col w-[80%] md:w-[70%] space-y-4">
                    <div class="flex flex-col justify-start items-start w-full">
                        <label for="login_input" class="font-extrabold text-[#440084] md:text-white text-sm">LOGIN</label>
                        <input v-model="login_form.email" type="text" id="login_input" placeholder="login"
                            class="h-10 w-full bg-slate-400/20 md:bg-white rounded p-2 outline-none font-extralight placeholder:font-extralight">
                    </div>
                    <div class="flex flex-col justify-start items-start w-full">
                        <label for="password_input" class="font-extrabold text-[#440084] md:text-white text-sm">SENHA</label>
                        <input v-model="login_form.password" type="password" id="password_input" placeholder="******"
                            class="h-10 w-full bg-slate-400/20 md:bg-white rounded p-2 outline-none font-extralight placeholder:font-extralight">
                    </div>
                    <button type="submit" class="w-full h-12 bg-[#440084] md:bg-white rounded">
                        <span class="font-extrabold text-white md:text-[#440084]">ENTRAR</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import localforage from 'localforage';


definePageMeta({
    name: 'login'
})

const login_form = ref({
    email: '',
    password: ''
})

const newLogin = async () => {
    const { data, error } = await useFetch('/login', {
        baseURL: 'http://localhost:3000',
        method: 'post',
        body: {
            ...login_form.value
        }
    })
    
    if (error.value) {
        console.log(error.value);
    }
    
    if (data.value) {
        useToken().value = data.value.access_token
        localforage.setItem('token', data.value.access_token)
        console.log(data.value);
        await navigateTo('/')
    }
}

definePageMeta({
    layout: 'blank'
})
</script>