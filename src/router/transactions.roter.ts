import { Router } from 'express'
import { myTransactionsGET } from '../controllers/transactions.controller.js'

const transactionsRouter = Router()
transactionsRouter.get('/transactions', myTransactionsGET)

export default transactionsRouter
