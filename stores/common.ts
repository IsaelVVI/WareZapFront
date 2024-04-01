import {defineStore} from "pinia";

export const useCommon = defineStore('common', {
    state: () => ({
        sidebar: false,
        shop_cart: false
    }),

    actions: {

    }
})