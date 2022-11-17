import { Request, Response } from 'express'
import { user } from '../interfaces/auth.interfaces.js'
import { signIn, signUp } from '../services/auth.service.js'

export async function signupPOST(req: Request, res: Response) {
	const { username, password }: user = req.body

	const result = await signUp(username, password)

	res.status(201).send('Account has been created successfully.')
}

export async function signinGET(req: Request, res: Response) {
	const { username, password }: user = req.body
	const token = await signIn(username, password)

	res.status(200).send({ token })
}
