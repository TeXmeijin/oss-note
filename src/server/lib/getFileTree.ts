import {FastifyReply, FastifyRequest} from 'fastify'
import dirTree from 'directory-tree'

// TODO: custom exclude conditions from req params
export function getFileTree(req: FastifyRequest, reply: FastifyReply) {
  const tree = dirTree('.', {exclude: [/node_modules/, /^\..+$/]})

  reply.send(JSON.stringify(tree))
}
