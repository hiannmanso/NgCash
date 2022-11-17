import { Request, Response } from 'express'
import { showMyTransactions } from '../services/transactions.service.js'

export async function myTransactionsGET(req: Request, res: Response) {
	const { authorization } = req.headers

	const result = await showMyTransactions(authorization)

	res.status(200).send(result)
}
