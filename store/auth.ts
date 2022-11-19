import { acceptHMRUpdate, defineStore } from 'pinia'
import { useStorage } from "@vueuse/core";

export const useUserStore = defineStore('user', () => {
  /**
   * Current named of the user.
   */
  const username = useStorage('username', null)
  const authenticated = useStorage('authenticated', false)
  const sessionToken = useStorage('sessionToken', null)

  /**
   * Logout
   */
  function logout() {
    username.value = null
    authenticated.value = false
    sessionToken.value = null
  }

  return {
    username,
    authenticated,
    sessionToken,

    logout,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
