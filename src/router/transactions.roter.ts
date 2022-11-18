import { Router } from 'express'
import {
	myTransactionsCreditedGET,
	myTransactionsDebitedGET,
	myTransactionsGET,
} from '../controllers/transactions.controller.js'

const transactionsRouter = Router()
transactionsRouter.get('/transactions', myTransactionsGET)
transactionsRouter.get('/transactions/debited', myTransactionsDebitedGET)
transactionsRouter.get('/transactions/credited', myTransactionsCreditedGET)

export default transactionsRouter
