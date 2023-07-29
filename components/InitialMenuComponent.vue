<template>
    <div class="w-full grid grid-cols-2 gap-4 mt-14">
        <div class="group h-80 bg-[#f9f7f7] hover:bg-[#440084] hover:scale-105 transition-all duration-300 rounded-3xl relative flex flex-col items-center">            
            <div class="absolute group-hover:-skew-y-6 -top-10 h-36 w-28 bg-[#440084] group-hover:bg-black/20 group-hover:backdrop-blur-sm rounded-2xl transition-all duration-300 flex justify-center items-center">
                <svg class="fill-white group-hover:fill-white stroke-white" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill-opacity="0" d="M6 4H10V6H14V4H18V20H6V4Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.15s" values="0;0.3"/></path><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="2"><path stroke-dasharray="66" stroke-dashoffset="66" d="M12 3H19V21H5V3H12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M9 13H15"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 10V16"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0"/></path></g><path stroke-dasharray="12" stroke-dashoffset="12" d="M14.5 3.5V6.5H9.5V3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"/></path></g></svg>
            </div>
            <div class="h-full w-full flex flex-col justify-end items-start p-4 space-y-4">
                <div class="flex flex-col">
                    <span class="group-hover:text-white transition-all duration-300 font-black text-lg">NOVO SERVIÇO</span>
                    <span class="group-hover:text-white transition-all duration-300 text-xs font-semibold">Adicione um novo serviço</span>                    
                </div>
                <div @click="navigateTo({name: 'new-service'})" class="select-none cursor-pointer group-hover:bg-white transition-all duration-300 h-10 w-full rounded-lg bg-black/40 flex justify-center items-center">
                    <span class="font-extrabold text-white group-hover:text-[#440084]">ADICIONAR</span>
                </div>
            </div>
        </div>        
        <div class="group h-80 bg-[#f9f7f7] hover:bg-[#440084] hover:scale-105 transition-all duration-300 rounded-3xl relative flex flex-col items-center">            
            <div class="absolute group-hover:-skew-y-6 -top-10 h-36 w-28 bg-[#440084] group-hover:bg-black/20 group-hover:backdrop-blur-sm rounded-2xl transition-all duration-300 flex justify-center items-center">
                <svg class="fill-white group-hover:fill-white stroke-white" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><g stroke="white" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21V20C3 17.7909 4.79086 16 7 16H11C13.2091 16 15 17.7909 15 20V21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"/></path><path stroke-dasharray="20" stroke-dashoffset="20" d="M9 13C7.34315 13 6 11.6569 6 10C6 8.34315 7.34315 7 9 7C10.6569 7 12 8.34315 12 10C12 11.6569 10.6569 13 9 13Z"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="20;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M15 6H21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M18 3V9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0"/></path></g></svg>
                <!-- <svg class="fill-white group-hover:fill-white stroke-white" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill-opacity="0" d="M6 4H10V6H14V4H18V20H6V4Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.15s" values="0;0.3"/></path><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="2"><path stroke-dasharray="66" stroke-dashoffset="66" d="M12 3H19V21H5V3H12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M9 13H15"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 10V16"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0"/></path></g><path stroke-dasharray="12" stroke-dashoffset="12" d="M14.5 3.5V6.5H9.5V3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"/></path></g></svg> -->
            </div>
            <div class="h-full w-full flex flex-col justify-end items-start p-4 space-y-4">
                <div class="flex flex-col">
                    <span class="group-hover:text-white transition-all duration-300 font-black text-lg">NOVO CLIENTE</span>
                    <span class="group-hover:text-white transition-all duration-300 text-xs font-semibold">Adicione um novo cliente</span>                    
                </div>
                <div @click="newClient" class="select-none cursor-pointer group-hover:bg-white transition-all duration-300 h-10 w-full rounded-lg bg-black/40 flex justify-center items-center">
                    <span class="font-extrabold text-white group-hover:text-[#440084]">ADICIONAR</span>
                </div>
            </div>
        </div>        
        <!-- <div class="group h-80 w-60 bg-[#f9f7f7] hover:bg-[#440084] hover:scale-105 transition-all duration-300 rounded-3xl relative flex flex-col items-center">            
            <div class="absolute group-hover:-skew-y-6 -top-10 h-36 w-28 bg-[#440084] group-hover:bg-black/20 group-hover:backdrop-blur-sm rounded-2xl transition-all duration-300 flex justify-center items-center">
                <svg class="fill-white group-hover:fill-white stroke-white" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill-opacity="0" d="M6 4H10V6H14V4H18V20H6V4Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.15s" values="0;0.3"/></path><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="2"><path stroke-dasharray="66" stroke-dashoffset="66" d="M12 3H19V21H5V3H12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 13L11 15L15 11"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="10;0"/></path></g><path stroke-dasharray="12" stroke-dashoffset="12" d="M14.5 3.5V6.5H9.5V3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"/></path></g></svg>                
            </div>
            <div class="h-full w-full flex flex-col justify-end items-start p-4 space-y-4">
                <div class="flex flex-col">
                    <span class="group-hover:text-white transition-all duration-300 font-black text-lg">FINALIZAR SERVIÇO</span>
                    <span class="group-hover:text-white transition-all duration-300 text-xs font-semibold">Finalize um serviço em aberto</span>                    
                </div>
                <div class="select-none cursor-pointer group-hover:bg-white transition-all duration-300 h-10 w-full rounded-lg bg-black/40 flex justify-center items-center">
                    <span class="font-extrabold text-white group-hover:text-[#440084]">FINALIZAR</span>
                </div>
            </div>
        </div> -->
    </div>
    <div class="w-full mt-4">
        <span class="group-hover:text-white transition-all duration-300 font-black text-lg">Ultimos Serviços</span>
        <div class="w-full h-40 max-md:overflow-x-scroll">
            <LastServicesComponent />
        </div>
    </div>
</template>

<script setup>

const newClient = () => {
    useNewClient().value = true
}

</script>