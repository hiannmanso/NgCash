import { Request, Response } from 'express'
import { newTransaction, showBalance } from '../services/balance.service.js'

export async function BalanceGET(req: Request, res: Response) {
	const { authorization } = req.headers
	const result = await showBalance(authorization)

	res.status(200).send(result)
}

export async function CashInPOST(req: Request, res: Response) {
	const { authorization } = req.headers
	const { username, value } = req.body
	const result = await newTransaction(authorization, username, value)

	res.status(200).send(result[1])
}
