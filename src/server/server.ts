import fastifyLib, {FastifyReply, FastifyRequest} from 'fastify'

export async function startServer(arg: {
  port: number
}) {
  const fastify = fastifyLib({logger: true})

  fastify.get('/api/file-tree', getFileTree)

  await fastify.listen(arg.port, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })
}

export function getFileTree(req: FastifyRequest, reply: FastifyReply) {
  reply.send('Hello')
}
