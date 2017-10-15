import Joi from 'joi-full'

export default Joi.object({
  serial: Joi.string().required().label('Número de série'),
  name: Joi.string().required().label('Nome'),
  relay1: Joi.string().required().label('Relé 1'),
  relay2: Joi.string().required().label('Relé 2'),
  location: Joi.string().required().label('Tipo'),
})
