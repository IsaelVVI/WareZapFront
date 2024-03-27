
export type modalsType = 'login' | 'register'

type modals = Record<modalsType, boolean> 

export const useModals = defineStore('modals', {
    state: (): modals => ({
        login: false,
        register: false,
    })
})