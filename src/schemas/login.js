import Joi from 'joi-full'

export default Joi.object({
  // email: Joi.string().email().required().label('E-mail'),
  username: Joi.string().required().label('Username'),
  password: Joi.string().required().label('Senha'),
})
