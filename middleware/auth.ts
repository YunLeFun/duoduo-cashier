import { useUserStore } from '~~/store/auth'

export default defineNuxtRouteMiddleware(() => {
  const user = useUserStore()
  if (!user.authenticated) {
    return navigateTo('/login')
  }
})
