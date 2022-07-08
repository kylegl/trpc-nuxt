import type { CompatibilityEvent, IncomingMessage } from 'h3'
import { useCookie } from 'h3'
import { prisma } from '../../utils/prisma'
import { verifyJwt } from '~~/utils/jwt'

const getUserFromReq = (req: IncomingMessage) => {
  const token = useCookie(req, 'token')

  if (token) {
    try {
      const verified = verifyJwt<CtxUser>(token)
      return verified
    }
    catch (e) {
      return null
    }
  }

  return null
}
export interface CtxUser {
  id: string
  email: string
  name: string
  iat: string
  exp: number
}

export function createContext({
  req, res,
}: CompatibilityEvent) {
  const user = getUserFromReq(req)

  return { req, res, prisma, user }
}

export type Context = ReturnType<typeof createContext>
