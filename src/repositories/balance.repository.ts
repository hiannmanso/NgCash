import { prisma } from '../configs/database.js'

async function getByAccountId(AccountId: number) {
	return prisma.accounts.findUnique({
		where: { id: AccountId },
		include: { users: { select: { username: true } } },
	})
}
async function getByUsername(username: string) {
	return prisma.users.findUnique({
		where: { username },
		include: { accounts: { select: { balance: true, id: true } } },
	})
}
async function updateAccount(
	AccountIDCashIn: number,
	BalanceCashIn: number,
	AccountIDCashOut: number,
	BalanceCashOut: number,
	Value: number,
	dateNow: number
) {
	const result = await prisma.$transaction([
		prisma.accounts.update({
			data: { balance: BalanceCashIn },
			where: { id: AccountIDCashIn },
		}),
		prisma.accounts.update({
			data: { balance: BalanceCashOut },
			where: { id: AccountIDCashOut },
		}),
		prisma.transactions.create({
			data: {
				value: Value,
				debitedAccountId: AccountIDCashIn,
				creditedAccountId: AccountIDCashOut,
			},
		}),
	])

	return result
}
const balanceRepository = {
	getByAccountId,
	getByUsername,
	updateAccount,
}

export default balanceRepository
