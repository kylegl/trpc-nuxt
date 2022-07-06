export function createContext({
  req,
  res,
}: {
  req: Request
  res: Response
}) {
  return { req, res }
}

export type Context = ReturnType<typeof createContext>
