import { useUserStore } from '~~/store/auth'

export default defineNuxtRouteMiddleware(() => {
  // has logged in
  const user = useUserStore()
  if (!user.authenticated) {
    return navigateTo('/')
  }
})
