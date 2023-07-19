export const useUser = () => useState<object>('user', () => {
    return {}
})

export const useToken = () => useState<string>('use_token', () => '')