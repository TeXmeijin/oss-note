import arg from "arg";
import {startServer} from "./server";

const args = arg({
  '--port': Number,
  '-P': '--port'
})

startServer({
  port: args['--port'] || 22222
})
