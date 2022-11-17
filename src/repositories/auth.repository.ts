import { prisma } from '../configs/database.js'

async function insert(username: string, password: string) {
	return prisma.accounts.create({
		data: { users: { create: { username, password } } },
	})
}
async function getByUsername(username: string) {
	return prisma.users.findUnique({ where: { username } })
}

const authRepository = { insert, getByUsername }

export default authRepository
