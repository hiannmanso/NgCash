import Joi from 'joi'
import { user } from '../interfaces/auth.interfaces'

export const authSchema = Joi.object<user>({
	username: Joi.string().required().min(3).max(25),
	password: Joi.string()
		.pattern(/^(?=.*[A-Z]).{8,}$/)
		.required(),
	confirmPassword: Joi.ref('password'),
})
