import { Router } from 'express'
import { transactionsBalanceGET } from '../controllers/transactions.controller'

const transactionsRouter = Router()
transactionsRouter.get('/balance', transactionsBalanceGET)

export default transactionsRouter
