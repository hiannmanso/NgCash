import Router from 'express'
import { signinGET, signupPOST } from '../controllers/auth.controller.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { authSchema } from '../schemas/auth.schema.js'

const AuthRouter = Router()

AuthRouter.post('/signup', validateSchema(authSchema), signupPOST)
AuthRouter.get('/signin', validateSchema(authSchema), signinGET)
export default AuthRouter
