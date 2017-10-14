import Joi from 'joi-full'

export default Joi.object({
  serial: Joi.string().required().label('Número de série'),
})
