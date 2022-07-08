import { acceptHMRUpdate, defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { inferProcedureOutput } from '@trpc/server'
import type { AppRouter } from '../server/trpc'

type TQuery = keyof AppRouter['_def']['queries']

type InferQueryOutput<TRouteKey extends TQuery> = inferProcedureOutput<
  AppRouter['_def']['queries'][TRouteKey]
>

export const useUserStore = defineStore('userStore', () => {
  const client = useClient()

  const storedUser = getStoredUser()

  // current user
  const user = useStorage<InferQueryOutput<'users.me'>>('user', storedUser)

  // isLoggedIn
  const isLoggedIn = computed(() => {
    return !!user.value?.id
  })

  // login in user
  async function loginUser({ email, redirect }: {
    email: string
    redirect: string
  }) {
    return await client.mutation('users.request-otp', { email, redirect })
  }

  // verify user
  async function verifyToken({ hash }: { hash: string }) {
    const { data } = await useAsyncQuery(['users.verify-otp', { hash }])
    return data
  }

  // logout user

  // register user
  async function registerUser({ name, email }: { name: string; email: string }) {
    const newUser = await client.mutation('users.register-user', { name, email })
    return newUser
  }

  async function setUser() {
    const { data } = await useAsyncQuery(['users.me'])

    if (data.value)
      setStoredUser(data.value)
  }
  return { user, loginUser, verifyToken, registerUser, setUser, isLoggedIn }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))

export interface CtxUser {
  id: string
  email: string
  name: string
  iat: string
  exp: number
}

