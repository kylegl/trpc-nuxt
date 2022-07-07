import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import * as trpc from '@trpc/server'
import { createRouter } from '../createRouter'
import { createUserSchema } from '~~/schema/user.schema'

export const userRouter = createRouter()
  .mutation('register-user', {
    input: createUserSchema,

    async resolve({ ctx, input }) {
      const { email, name } = input
      console.log('prisma', ctx.prisma)
      try {
        const user = await ctx.prisma.user.create({
          data: {
            email,
            name,
          },
        })

        return user
      }
      catch (err) {
        if (err instanceof PrismaClientKnownRequestError) {
          if (err.code === 'P2002') {
            throw new trpc.TRPCError({
              code: 'CONFLICT',
              message: 'User already exists',
            })
          }
        }

        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Do you smell smoke?',
        })
      }
    },
  })
  .query('getUsers', {
    async resolve({ ctx, input }) {
    },
  })
