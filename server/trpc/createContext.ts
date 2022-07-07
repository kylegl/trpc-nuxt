import { prisma } from '../../utils/prisma'

export function createContext({
  req,
  res,
}: {
  req: Request
  res: Response
}) {
  return { req, res, prisma }
}

export type Context = ReturnType<typeof createContext>
