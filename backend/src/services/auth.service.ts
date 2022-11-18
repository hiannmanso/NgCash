import bcrypt from 'bcrypt'

import { user } from '../interfaces/auth.interfaces'
import authRepository from '../repositories/auth.repository.js'
import { generateToken } from '../utils/jwt.token.utils.js'

export async function signUp(username: string, password: string) {
	const isInvalidUsername = await authRepository.getByUsername(username)
	if (isInvalidUsername) {
		throw {
			status: 401,
			message: `This username is already in use.`,
		}
	}

	await authRepository.insert(username, bcrypt.hashSync(password, 10))
}

export async function signIn(username: string, password: string) {
	const isValidAccount = await authRepository.getByUsername(username)

	if (!isValidAccount) {
		throw {
			status: 401,
			message: `username invalid.`,
		}
	}
	if (!bcrypt.compareSync(password, isValidAccount.password)) {
		throw {
			status: 401,
			message: `Incorrect password or username.`,
		}
	}
	const token = generateToken(isValidAccount.accountId)
	return token
}
