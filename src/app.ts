import express from 'express'
import 'express-async-errors'
import cors from 'cors'

import { handleError } from './middlewares/handleError.js'
import AuthRouter from './router/auth.router.js'

const server = express()

server.use(cors())
server.use(express.json())
server.use(AuthRouter)
server.use(handleError)
export default server
