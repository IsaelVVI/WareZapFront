<template>
    <div class="h-full w-full flex bg-white md:bg-transparent">        
        <div class="hidden h-full w-[70%] bg-white md:flex justify-center items-center">
            <img src="../assets/images/warezap.png" alt="warezap logo">            
        </div>
        <div class="w-full h-full md:w-[30%]">
            <div class="w-full h-full flex flex-col justify-center items-center relative overflow-hidden md:bg-[#440084]">
                <img class="absolute top-0 hidden md:flex" src="../assets/images/warezap2.png" alt="warezap logo">
                <img class="absolute top-0 md:hidden" src="../assets/images/warezap.png" alt="warezap logo">
                <form action="" class="z-20 flex flex-col w-[80%] md:w-[70%] space-y-4">
                    <div class="flex flex-col justify-start items-start w-full">
                        <label for="login_input" class="font-extrabold text-[#440084] md:text-white text-sm">LOGIN</label>
                        <input type="text" id="login_input" placeholder="login"
                            class="h-10 w-full bg-slate-400/20 md:bg-white rounded p-2 outline-none font-extralight placeholder:font-extralight">
                    </div>
                    <div class="flex flex-col justify-start items-start w-full">
                        <label for="password_input" class="font-extrabold text-[#440084] md:text-white text-sm">SENHA</label>
                        <input type="password" id="password_input" placeholder="******"
                            class="h-10 w-full bg-slate-400/20 md:bg-white rounded p-2 outline-none font-extralight placeholder:font-extralight">
                    </div>
                    <button class="w-full h-12 bg-[#440084] md:bg-white rounded">
                        <span class="font-extrabold text-white md:text-[#440084]">ENTRAR</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'blank'
})
</script>