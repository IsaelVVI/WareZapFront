import localforage from "localforage"
import { UserClassBody } from "../classes/user"

export const auth = async () => {    
    const token = await localforage.getItem('token')
    
    if (!token) {
        return navigateTo({
            name: 'login'
        })
    }
    
    const {data, error} = await useFetch<UserClassBody>('me', {
        method: 'get',
        baseURL: 'http://localhost:3000/',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    
    if(error.value){
        return navigateTo({
            name: 'login'
        })
    }
    
    if (data.value) {
        useToken().value = token.toString()
        useUser().value.setUser(
            data.value.id,
            data.value.name,
            data.value.email,
            data.value.phone,
            data.value.company,
            data.value.plan
        )
        return true
    }
}