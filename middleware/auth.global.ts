export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useUserStore()
  if (from.path === to.path)
    return abortNavigation()

  if (!isLoggedIn && to.path === '/')
    return to.path

  if (!isLoggedIn)
    return '/login'
})
