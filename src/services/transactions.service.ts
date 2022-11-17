import transactionsRepository from '../repositories/transactions.repository.js'
import { decodeToken } from '../utils/jwt.token.utils.js'

export async function showMyTransactions(authorization: string) {
	const infoToken = decodeToken(authorization)

	const result = await transactionsRepository.getByAccountId(infoToken.userID)
	return result
}
