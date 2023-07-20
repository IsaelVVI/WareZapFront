<template>
    <div class="w-full h-full flex justify-center items-center">
        <div class="w-[95%] h-[95%] rounded-md pt-14">
            <div class="h-full w-full pl-8 pr-8 flex">
                <div class="w-[60%]">
                    <span class="font-extrabold text-2xl">Dashboard</span>
                    <div class="w-full">
                        <InitialMenuComponent />
                    </div>
                </div>
                <div class="w-[40%]">
                    <span class="font-extrabold text-2xl">Informações</span>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

onMounted( async() => {
    // if (!Object.keys(useUser().value).length > 0) {
    //     await navigateTo('/login')
    // }
})
</script>