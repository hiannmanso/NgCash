import { Request, Response } from 'express'
import { showBalance } from '../services/transactions.service'

export async function transactionsBalanceGET(req: Request, res: Response) {
	const { authorization } = req.headers
	const result = showBalance(authorization)

	res.status(200).send(result)
}
