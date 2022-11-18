import Joi from 'joi'

export const cashInSchema = Joi.object({
	username: Joi.string().required().min(3).max(25),
	value: Joi.number().required(),
})
