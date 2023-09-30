import { AuthModel } from 'pocketbase'
import { User } from './../types/user'

export function getAvatarUrl(user: User | AuthModel) {
    if (!user) return ''
    return `${import.meta.env.VITE_API_URL}/files/users/${user.id}/${user.avatar}`
}
