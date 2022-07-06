// ~/server/trpc/index.ts
import { createRouter } from './createRouter'
import { userRouter } from './route/user.router'

export const router = createRouter()
  .merge('users.', userRouter)

export type Router = typeof router
