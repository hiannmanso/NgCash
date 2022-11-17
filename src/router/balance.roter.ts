import { Router } from 'express'
import { BalanceGET, CashInPOST } from '../controllers/balance.controller.js'

const balanceRouter = Router()
balanceRouter.get('/balance', BalanceGET)
balanceRouter.post('/cash-in', CashInPOST)
export default balanceRouter
