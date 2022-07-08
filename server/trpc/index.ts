// ~/server/trpc/index.ts
import { createRouter } from './createRouter'
import { userRouter } from './route/user.router'
export * from './createContext'

export const router = createRouter()
  .merge('users.', userRouter)

export type AppRouter = typeof router
