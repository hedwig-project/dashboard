import Joi from 'joi-full'

export default Joi.object({
  home_ssid: Joi.string().required().label('SSID'),
  home_password: Joi.string().required().label('Senha'),
  module_ip: Joi.string().required().label('IP'),
  module_ap_mode: Joi.string().required().label('Modo'),
  module_ap_name: Joi.string().required().label('Nome'),
  module_ap_password: Joi.string().length(8).required().label('Senha'),
})
