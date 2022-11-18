import { prisma } from '../configs/database.js'

async function getByAccountId(AccountId: number) {
	return prisma.transactions.findMany({
		where: {
			OR: [
				{
					debitedAccountId: {
						equals: AccountId,
					},
				},
				{ creditedAccountId: { equals: AccountId } },
			],
		},
	})
}
async function getByAccountIdOnlyDebited(AccountId: number) {
	return prisma.transactions.findMany({
		where: { debitedAccountId: AccountId },
	})
}
async function getByAccountIdOnlyCredited(AccountId: number) {
	return prisma.transactions.findMany({
		where: { creditedAccountId: AccountId },
	})
}
const transactionsRepository = {
	getByAccountId,
	getByAccountIdOnlyDebited,
	getByAccountIdOnlyCredited,
}

export default transactionsRepository
