import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    // payload: { id: number }
    user: {
      sub: string
      role: 'ADMIN' | 'MEMBER'
    } // user type is return type of `request.user` object
  }
}
