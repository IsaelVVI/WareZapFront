<template>
  <div>
    <VitePwaManifest />
    <NuxtWelcome />
  </div>
</template>
<script setup>
useHead({
  script: [
    {
      src: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js',
      defer: true
    }
  ]
})


onMounted(() => {
  window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "27d4b65d-a5c0-4d1c-ac4a-54461bb5de5c",
      safari_web_id: "web.onesignal.auto.3c5e9739-5d2f-4f69-94b2-78aed3043174",
      notifyButton: {
        enable: true,
      },
    });
  });
  
  // const s = document.createElement("script")
  // s.src = "https://notix.io/ent/current/enot.min.js"
  // s.onload = function (sdk) {
  //   sdk.startInstall(
  //     {
  //       "appId": "1005d834964b0953bacba1e7d696804",
  //       "loadSettings": true
  //     }
  //   )
  // }
  // document.head.append(s)
})
</script>