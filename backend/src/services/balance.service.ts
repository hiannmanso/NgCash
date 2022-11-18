import authRepository from '../repositories/auth.repository.js'
import balanceRepository from '../repositories/balance.repository.js'
import transactionsRepository from '../repositories/balance.repository.js'
import { decodeToken } from '../utils/jwt.token.utils.js'

export async function showBalance(authorization: string) {
	const infoToken = decodeToken(authorization)

	const result = await balanceRepository.getByAccountId(infoToken.userID)
	return result
}

export async function newTransaction(
	authorization: string,
	username: string,
	value: number
) {
	const infoToken = decodeToken(authorization)
	const infoUser = await balanceRepository.getByAccountId(infoToken.userID)
	if (infoUser.balance < value) {
		throw {
			status: 400,
			message: 'You do not have enough balance.',
		}
	}
	if (infoUser.users.username === username) {
		throw {
			status: 400,
			message: `You cannot make a transfer to yourself.`,
		}
	}
	const isUsernameValid = await balanceRepository.getByUsername(username)
	if (!isUsernameValid) {
		throw {
			status: 400,
			message: `This user does not exist.`,
		}
	}
	console.log(infoUser.users[username], username)
	const result = await balanceRepository.updateAccount(
		isUsernameValid.accountId,
		isUsernameValid.accounts.balance + value,
		infoUser.id,
		infoUser.balance - value,
		value
	)
	return result
}
