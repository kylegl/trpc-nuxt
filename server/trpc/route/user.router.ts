import { createRouter } from '../createRouter'

export const userRouter = createRouter()
  .query('getUsers', {
    async resolve({ ctx, input }) {
    // use your ORM of choice
      return { id: input, name: 'Bilbo FUcking Baggins' }
    },
  })
