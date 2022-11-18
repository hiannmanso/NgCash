import { Request, Response } from 'express'
import {
	showMyTransactions,
	showMyTransactionsCredited,
	showMyTransactionsDebited,
} from '../services/transactions.service.js'

export async function myTransactionsGET(req: Request, res: Response) {
	const { authorization } = req.headers

	const result = await showMyTransactions(authorization)

	res.status(200).send(result)
}
export async function myTransactionsDebitedGET(req: Request, res: Response) {
	const { authorization } = req.headers

	const result = await showMyTransactionsDebited(authorization)

	res.status(200).send(result)
}
export async function myTransactionsCreditedGET(req: Request, res: Response) {
	const { authorization } = req.headers

	const result = await showMyTransactionsCredited(authorization)

	res.status(200).send(result)
}
