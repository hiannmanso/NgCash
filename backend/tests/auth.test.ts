import server from '../src/app'
import supertest from 'supertest'
import faker from '@faker-js/faker'
import {
	bodySignup,
	bodySignupInvalidPassword,
	bodySignupInvalidUsername,
} from './factories/auth.factory'

describe('auth tests', () => {
	it(`sign up test with valid username and password`, async () => {
		const result = await supertest(server)
			.post('/signup')
			.send(bodySignup())
		expect(result.status).toEqual(201)
	})
	it(`sign up test with invalid password`, async () => {
		const result = await supertest(server)
			.post('/signup')
			.send(bodySignupInvalidPassword())
		console.log(result)
		expect(result.status).toEqual(413) //ARRUMARR!!
	})
	it(`sign up test with invalid username `, async () => {
		const result = await supertest(server)
			.post('/signup')
			.send(bodySignupInvalidUsername())
		expect(result.status).toEqual(422)
	})
	it(`signin with valid account `, async () => {
		await supertest(server).post('/signup').send({
			username: 'teste',
			password: 'Teste12345',
		})
		const result = await supertest(server)
			.post('/signin')
			.send({ username: 'teste', password: 'Teste12345' })
		expect(result.status).toEqual(200)
	})
	it(`signin with invalid account `, async () => {
		const result = await supertest(server)
			.post('/signin')
			.send({ username: 'test', password: 'Teste12345' })
		expect(result.status).toEqual(401)
	})
})
