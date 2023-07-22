<template>
    <div class="grid grid-cols-2 gap-4 mt-14">
        <div class="w-full h-[9.5rem] rounded-md border grid grid-cols-2 p-2 pr-4 pl-4">
            <div class="w-full flex flex-col">
            <span class="font-extrabold text-[1.15rem] opacity-90">Serviços</span>
            <span class="font-bold text-xs opacity-50">HOJE</span>
            <div class="grid grid-cols-2 mt-10">
                    <div class="h-8 w-fit p-2 select-none cursor-pointer group hover:bg-white rounded bg-[#440084] flex justify-center items-center transition-all">
                        <span class="font-bold text-xs group-hover:text-[#440084] text-white transition-all">VISUALIZAR</span>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center items-center bg-slate-400 bg-opacity-10 rounded-md cursor-pointer group hover:bg-[#440084] transition-all">
                <span class="dsstat-value p-2 h-20 w-20 flex justify-center items-center select-none group-hover:text-white transition-all group-hover:-translate-y-1 group-hover:scale-110">40</span>
            </div>
        </div>        
        <div class="w-full h-[9.5rem] rounded-md border grid grid-cols-2 p-2 pr-4 pl-4">
            <div class="w-full flex flex-col">
            <span class="font-extrabold text-[1.15rem] opacity-90">Clientes</span>
            <span class="font-bold text-xs opacity-50">QUANTIDADE</span>
            <div class="grid grid-cols-2 mt-10">
                    <div class="h-8 w-fit p-2 select-none cursor-pointer group hover:bg-white rounded bg-[#440084] flex justify-center items-center transition-all">
                        <span class="font-bold text-xs group-hover:text-[#440084] text-white transition-all">VISUALIZAR</span>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center items-center bg-slate-400 bg-opacity-10 rounded-md cursor-pointer group hover:bg-[#440084] transition-all">
                <span class="dsstat-value p-2 h-20 w-20 flex justify-center items-center select-none group-hover:text-white transition-all group-hover:-translate-y-1 group-hover:scale-110">10</span>
            </div>
        </div>        
        <div class="w-full h-[9.5rem] rounded-md border grid grid-cols-2 p-2 pr-4 pl-4">
            <div class="w-full flex flex-col">
            <span class="font-extrabold text-[1.15rem] opacity-90">Orçamentos</span>
            <span class="font-bold text-xs opacity-50">HOJE</span>
            <div class="grid grid-cols-2 mt-10">
                    <div class="h-8 w-fit p-2 select-none cursor-pointer group hover:bg-white rounded bg-[#440084] flex justify-center items-center transition-all">
                        <span class="font-bold text-xs group-hover:text-[#440084] text-white transition-all">VISUALIZAR</span>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center items-center bg-slate-400 bg-opacity-10 rounded-md cursor-pointer group hover:bg-[#440084] transition-all">
                <span class="dsstat-value p-2 h-20 w-20 flex justify-center items-center select-none group-hover:text-white transition-all group-hover:-translate-y-1 group-hover:scale-110">0</span>
            </div>
        </div>        
        <div class="w-full h-[9.5rem] rounded-md border grid grid-cols-2 p-2 pr-4 pl-4">
            <div class="w-full flex flex-col">
            <span class="font-extrabold text-[1.15rem] opacity-90">Garantias</span>
            <span class="font-bold text-xs opacity-50">ATIVAS</span>
            <div class="grid grid-cols-2 mt-10">
                    <div class="h-8 w-fit p-2 select-none cursor-pointer group hover:bg-white rounded bg-[#440084] flex justify-center items-center transition-all">
                        <span class="font-bold text-xs group-hover:text-[#440084] text-white transition-all">VISUALIZAR</span>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center items-center bg-slate-400 bg-opacity-10 rounded-md cursor-pointer group hover:bg-[#440084] transition-all">
                <span class="dsstat-value p-2 h-20 w-20 flex justify-center items-center select-none group-hover:text-white transition-all group-hover:-translate-y-1 group-hover:scale-110">5</span>
            </div>
        </div>        
    </div>
    <div class="w-full mt-4">
        <span class="group-hover:text-white transition-all duration-300 font-black text-lg">Ultimos Clientes</span>
        <div class="w-full h-40 max-md:overflow-x-scroll">
            <LastClientsComponent />
        </div>
    </div>
</template>

<script setup>
</script>