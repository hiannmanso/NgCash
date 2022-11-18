import { faker } from '@faker-js/faker'

export function bodySignup() {
	return {
		username: String(faker.name),
		password: 'Hiann123',
	}
}

export function bodySignupInvalidPassword() {
	return {
		username: faker.name,
		password: 'hiann123',
	}
}
export function bodySignupInvalidUsername() {
	return {
		username: 'hi',
		password: 'Hiann123',
	}
}
