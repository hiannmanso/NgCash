import { Router } from 'express'
import { BalanceGET, CashInPOST } from '../controllers/balance.controller.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { cashInSchema } from '../schemas/cashIn.schema.js'

const balanceRouter = Router()
balanceRouter.get('/balance', BalanceGET)
balanceRouter.post('/cash-in', validateSchema(cashInSchema), CashInPOST)
export default balanceRouter
