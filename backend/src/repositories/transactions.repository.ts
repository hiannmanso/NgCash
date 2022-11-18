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
		include: {
			accounts_accountsTotransactions_creditedAccountId: {
				select: { users: { select: { username: true } } },
			},
			accounts_accountsTotransactions_debitedAccountId: {
				select: { users: { select: { username: true } } },
			},
		},
	})
}
async function getByAccountIdOnlyDebited(AccountId: number) {
	return prisma.transactions.findMany({
		where: { debitedAccountId: AccountId },
		include: {
			accounts_accountsTotransactions_creditedAccountId: {
				select: { users: { select: { username: true } } },
			},
			accounts_accountsTotransactions_debitedAccountId: {
				select: { users: { select: { username: true } } },
			},
		},
	})
}
async function getByAccountIdOnlyCredited(AccountId: number) {
	return prisma.transactions.findMany({
		where: { creditedAccountId: AccountId },
		include: {
			accounts_accountsTotransactions_creditedAccountId: {
				select: { users: { select: { username: true } } },
			},
			accounts_accountsTotransactions_debitedAccountId: {
				select: { users: { select: { username: true } } },
			},
		},
	})
}
const transactionsRepository = {
	getByAccountId,
	getByAccountIdOnlyDebited,
	getByAccountIdOnlyCredited,
}

export default transactionsRepository
