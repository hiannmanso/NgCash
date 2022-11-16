import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import { handdleError } from './middlewares/handdleError'

const server = express()

server.use(cors())
server.use(express.json())
server.use(handdleError)
export default server
