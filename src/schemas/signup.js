import Joi from 'joi-full' // has funcionalities for date type that used to be
                           // present on Joi but have been removed in more recent versions of Joi

export default Joi.object({
  email: Joi.string().email().required().label('E-mail'),
  password: Joi.string().min(6).required().label('Senha'),
  passwordConfirm: Joi.any().valid(Joi.ref('password'))
    .required().label('Confirmação de senha')
    .options({
      language: {
        any: {
          allowOnly: '!!As senhas são diferentes',
        },
      },
    }),
  username: Joi.string().alphanum().min(3).max(30)
    .required(),
  birthDate: Joi.date().format('DD/MM/YYYY').max('now').label('Data de nascimento')
    .options({
      language: {
        date: {
          format: 'deve estar no seguinte formato: DD/MM/YYYY',
        },
      },
    }),
  // mensagem de erro de formato esta acima ao inves de no arquivo
  // de config pois no arquivo de config nao estava funcionando
  // (estava em ingles mesmo apos mudar para portugues a string de erro)
})
