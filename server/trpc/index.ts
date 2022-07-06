// ~/server/trpc/index.ts
import type { inferAsyncReturnType } from '@trpc/server'
import * as trpc from '@trpc/server'
import { z } from 'zod'

export const router = trpc.router()
  // queries and mutations...
  .query('getUsers', {
    async resolve(req) {
      // use your ORM of choice
      return { id: req.input, name: 'Bilbo FUcking Baggins' }
    },
  })
  // .mutation('createUser', {
  //   // validate input with Zod
  //   input: z.object({ name: z.string().min(5) }),
  //   async resolve(req) {
  //     // use your ORM of choice
  //     return await UserModel.create({
  //       data: req.input,
  //     })
  //   },
  // })
