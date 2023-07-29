<template>
    <!-- modais -->
    <ModalNewClientComponent v-if="modalclient" />
    <ModalSelectClientComponent v-if="modalselectclient" />
    <ModalSelectDeviceComponent v-if="modalselectdevice" />
    <div class="h-screen w-screen bg-white">
        <div class="h-full w-full flex items-center">
            <div class="hidden md:flex h-full w-14 md:w-32 bg-[#f8f5f1] flex-col items-center relative space-y-4">
                <div class="h-40 w-full">     
                    <!-- Adicionar Logo depois -->
                </div>
                <div class="h-16 w-16 rounded-2xl bg-white flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212C22 19.576 22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2c-1.108 0-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823ZM11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0v3Z" clip-rule="evenodd"/></svg>
                </div>
                <div class="h-16 w-16 hover:bg-white hover:opacity-100 transition-all cursor-pointer rounded-2xl opacity-50 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><g fill="currentColor"><path fill-rule="evenodd" d="M14.25 4.48v3.057c0 .111 0 .27.021.406a.937.937 0 0 0 .444.683a.96.96 0 0 0 .783.072c.13-.04.272-.108.378-.159L17 8.005l1.124.534c.106.05.248.119.378.16a.958.958 0 0 0 .783-.073a.937.937 0 0 0 .444-.683c.022-.136.021-.295.021-.406V3.031c.113-.005.224-.01.332-.013C21.154 2.98 22 3.86 22 4.933v11.21c0 1.112-.906 2.01-2.015 2.08c-.97.06-2.108.179-2.985.41c-1.082.286-2.373.904-3.372 1.436c-.28.149-.575.257-.878.323V5.174a3.57 3.57 0 0 0 .924-.371c.184-.107.377-.216.576-.323Zm5.478 8.338a.75.75 0 0 1-.546.91l-4 1a.75.75 0 1 1-.364-1.456l4-1a.75.75 0 0 1 .91.546ZM11.25 5.214a3.444 3.444 0 0 1-.968-.339C9.296 4.354 8.05 3.765 7 3.487c-.887-.233-2.041-.352-3.018-.412C2.886 3.008 2 3.9 2 4.998v11.146c0 1.11.906 2.01 2.015 2.079c.97.06 2.108.179 2.985.41c1.081.286 2.373.904 3.372 1.436c.28.149.575.257.878.324V5.214ZM4.273 8.818a.75.75 0 0 1 .91-.546l4 1a.75.75 0 1 1-.365 1.456l-4-1a.75.75 0 0 1-.545-.91Zm.91 3.454a.75.75 0 1 0-.365 1.456l4 1a.75.75 0 0 0 .364-1.456l-4-1Z" clip-rule="evenodd"/><path d="M18.25 3.151c-.62.073-1.23.18-1.75.336a8.2 8.2 0 0 0-.75.27v3.182l.75-.356l.008-.005a1.13 1.13 0 0 1 .492-.13c.048 0 .094.004.138.01c.175.029.315.1.354.12l.009.005l.75.356V3.15Z"/></g></svg>
                </div>
                <div class="h-16 w-16 hover:bg-white hover:opacity-100 transition-all cursor-pointer rounded-2xl opacity-50 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464ZM13.75 10c0 .414.336.75.75.75h.69l-2.013 2.013a.25.25 0 0 1-.354 0l-1.586-1.586a1.75 1.75 0 0 0-2.474 0L6.47 13.47a.75.75 0 1 0 1.06 1.06l2.293-2.293a.25.25 0 0 1 .354 0l1.586 1.586a1.75 1.75 0 0 0 2.474 0l2.013-2.012v.689a.75.75 0 0 0 1.5 0V10a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75Z" clip-rule="evenodd"/></svg>
                </div>
                <div class="w-full absolute bottom-0 flex flex-col items-center space-y-4 pb-10">
                    <div class="h-16 w-16 hover:bg-white hover:opacity-100 transition-all cursor-pointer rounded-2xl opacity-50 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 512 512"><path fill="currentColor" d="M495.9 166.6c3.2 8.7.5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4l-55.6 17.8c-8.8 2.8-18.6.3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4c-1.1-8.4-1.7-16.9-1.7-25.5s.6-17.1 1.7-25.4l-43.3-39.4c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160a80 80 0 1 0 0 160z"/></svg>
                    </div>                    
                    <div class="h-16 w-16 hover:bg-white hover:opacity-100 transition-all cursor-pointer rounded-2xl opacity-50 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
                    </div>                    
                    <div class="cursor-pointer h-12 w-12 relative rounded-full bg-white flex justify-center items-center">
                        <div class="h-4 w-4 rounded-full bg-yellow-400 absolute top-0 right-0 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="white" d="M18 10h-4V6a2 2 0 0 0-4 0l.071 4H6a2 2 0 0 0 0 4l4.071-.071L10 18a2 2 0 0 0 4 0v-4.071L18 14a2 2 0 0 0 0-4z"/></svg>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/></svg>
                    </div>                    
                </div>
            </div>
            <div class="flex-1 flex flex-col h-full overflow-x-hidden">
                <!-- <div class="h-24 md:h-40 flex justify-center items-center gap-2 md:block w-full bg-[#440084] relative">
                    <div class="md:absolute overflow-hidden border md:border-4 border-white h-14 w-14 md:h-40 md:w-40 rounded-full bg-white -bottom-16 left-20 flex justify-center items-center">
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2023/01/22/11/49/girl-7736189_1280.jpg" alt="">
                        </div>
                    </div>
                    <div class="md:absolute w-max h-14 bottom-0 md:left-64 flex flex-col md:flex-row items-center justify-center md:gap-8">
                        <span class="text-white text-3xl font-extrabold w-max select-none">Fulano de Tal</span>
                        <span class="h-8 w-32 bg-yellow-500/90 backdrop-blur-lg shadow-md shadow-yellow-500/30 rounded-md text-sm font-extrabold flex justify-center items-center select-none text-white">Premium</span>
                    </div>
                </div> -->
                <NuxtPage />
            </div>
        </div>
    </div>
</template>

<script setup>
const modalclient = useNewClient()
const modalselectclient = useSelectClient()
const modalselectdevice = useSelectDevice()


onMounted(() => {
    document.onkeydown = function(e) {
      if(e.key === 'Escape') {
        useNewClient().value = false
        useSelectClient().value = false
        useSelectDevice().value = false
      }
    }    
})
</script>
