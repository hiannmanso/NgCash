import Joi from 'joi'
import { user } from '../interfaces/auth.interfaces'

export const authSchema = Joi.object<user>({
	username: Joi.string().required().min(3).max(25),
	password: Joi.string()
		.pattern(/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z$*&@#]{8,}$/)
		.required(),
	confirmPassword: Joi.ref('password'),
})
