import type { CtxUser } from '~~/server/trpc'

export function getStoredUser(): CtxUser | null {
  const user = localStorage.getItem('user')

  return user ? JSON.parse(user) : null
}

export function setStoredUser(user: CtxUser) {
  localStorage.setItem('user', JSON.stringify(user))
}

export function clearStoredUser() {
  localStorage.removeItem('user')
}

