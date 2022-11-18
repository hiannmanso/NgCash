import transactionsRepository from '../repositories/transactions.repository.js'
import { decodeToken } from '../utils/jwt.token.utils.js'

export async function showMyTransactions(authorization: string) {
	const infoToken = decodeToken(authorization)

	const result = await transactionsRepository.getByAccountId(infoToken.userID)
	return result
}
export async function showMyTransactionsDebited(authorization: string) {
	const infoToken = decodeToken(authorization)

	const result = await transactionsRepository.getByAccountIdOnlyDebited(
		infoToken.userID
	)
	return result
}
export async function showMyTransactionsCredited(authorization: string) {
	const infoToken = decodeToken(authorization)

	const result = await transactionsRepository.getByAccountIdOnlyCredited(
		infoToken.userID
	)
	return result
}
