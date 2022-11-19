import { useUserStore } from '~~/store/auth'

export default defineNuxtRouteMiddleware(() => {
  const user = useUserStore()
  if (user.sessionToken) {
    // todo use ofetch
    // $axios.setHeader('X-LC-Session', user.sessionToken)
  }
})
