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
                    <th>Cliente</th>
                    <th>Serviço</th>
                    <th>Aparelho</th>
                    <th>
                        <button class="dsbtn dsbtn-sm bg-[#440084] hover:text-[#440084] w-24 transition-all rounded text-white font-bold">Ver Todos</button>
                    </th>
                </tr>
            </thead>
            <tbody class="text-center">
                <!-- row 1 -->
                <tr>
                    <th>
                        <!-- <label>
                            <input type="checkbox" class="dscheckbox" />
                        </label> -->
                    </th>
                    <td>
                        <div class="flex items-center space-x-3">
                            <div class="dsavatar">
                                <div class="dsmask dsmask-squircle w-12 h-12">
                                    <img src="https://cdn.pixabay.com/photo/2023/01/22/11/49/girl-7736189_1280.jpg"
                                        alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">Fulano de Tal</div>
                                <div class="text-sm bg-green-700 text-white rounded-md text-center font-bold">CREDITO</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        Trocar a Tela que trincou
                        <br />
                        <span class="dsbadge dsbadge-ghost dsbadge-sm w-full rounded-md bg-slate-700 text-white">Inicio: 20/07/2023</span>
                    </td>
                    <td>Samsung S10e</td>
                    <th>
                        <button class="dsbtn dsbtn-sm bg-[#440084] hover:text-[#440084] transition-all rounded text-white font-bold">Detalhes</button>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
</script>