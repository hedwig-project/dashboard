/* eslint-disable */
import moment from 'moment'

export const convertModuleIdToTopic = (moduleId) => {
  return `hw/${moduleId}`
}

export const convertTopicToModuleId = (topic) => {
  const re = /hw\/(\w+)/
  return re.exec(topic)[1]
}

export const decodeDataMessage = (message) => {
  return message
    .filter(item => item.controlParameters.reduce((result, param) => {
      return (param.value === 'temp_umi_pres' || param.value === 'acesso_estado') || result
    }, false))
    .map(item => {
      return ({
        module: convertTopicToModuleId(item.topic),
        data: {
          ...decodePayload(item.payload),
          lastUpdatedAt: getTimestamp(item.controlParameters),
        },
      })
    })
}

export const decodePayload = (payload) => {
  return Object
    .keys(payload)
    .filter(key => key.substring(0, 1) === 's')
    .map(key => ({
      key: decodeSensorName(payload[key]),
      value: payload[`vl${key.substring(1)}`],
    }))
    .reduce((obj, data) => {
      obj[data.key] = data.value
      return obj
    }, {})
}

export const decodeSensorName = (name) => {
  switch (name) {
    case 'umidade':
      return 'humidity'
    case 'temperatura':
      return 'temperature'
    case 'presenca':
      return 'presence'
    case 'rl1':
      return 'relay1'
    case 'rl2':
      return 'relay2'
    case 'abertura':
      return 'opening'
    case 'luz':
      return 'luminosity'
    case 'aberto':
      return 'gate'
    case 'alarme':
      return 'alarm'
    case 'tempo_alarme':
      return 'alarmLastChange'
  }
}

export const encodeActionMessage = (moduleId, ty, payload) => {
  const message = {}

  message.topic = convertModuleIdToTopic(moduleId)
  message.controlParameters = []
  message.controlParameters.push({parameter: 'ts', value: moment().unix()})
  message.controlParameters.push({parameter: 'ty', value: ty})
  message.payload = payload

  return message
}

export const encodeModuleConfigurationMessage = (module, ty, payload) => {
  const message = {}

  message.timestamp = moment().unix()
  message.modulesConfiguration = []

  const moduleConfiguration = {
    moduleId: module.serial,
    moduleName: module.name,
    moduleTopic: convertModuleIdToTopic(module.serial),
    unregister: false,
  }

  if (ty) {
    moduleConfiguration.messages = [
      {
        controlParameters: [
          { parameter: 'ts', value: moment().unix() },
          { parameter: 'ty', value: ty },
        ],
        payload,
      },
    ]
  }

  message.modulesConfiguration.push(moduleConfiguration)

  return message
}

export const encodeModuleRegistrationMessage = (module) => {
  const message = {}

  message.timestamp = moment().unix()
  message.morpheusConfiguration = {
    register: [],
  }

  const moduleRegistration = {
    moduleId: module.serial,
    moduleName: module.name,
    moduleTopic: convertModuleIdToTopic(module.serial),
    receiveMessagesAtMostEvery: '1:s',
    qos: '1',
  }

  message.morpheusConfiguration.register.push(moduleRegistration)

  return message
}

export const encodeModuleRemovalMessage = (module) => {
  const message = {}

  message.timestamp = moment().unix()
  message.modulesConfiguration = []

  const moduleConfiguration = {
    moduleId: module.serial,
    moduleName: module.name,
    moduleTopic: convertModuleIdToTopic(module.serial),
    unregister: true,
  }

  message.modulesConfiguration.push(moduleConfiguration)

  return message
}

export const encodeMorpheusConfigurationMessage = (morpheus) => {
  const message = {}

  message.timestamp = moment().unix()

  message.morpheusConfiguration = {
    requestSendingPersistedMessages: morpheus.resend,
  }

  return message
}

export const getTimestamp = (parameters) => {
  const ts = parameters.filter(param => param.parameter === 'ts')

  return ts[0].value
}

export default {
  convertModuleIdToTopic,
  convertTopicToModuleId,
  decodeDataMessage,
  decodePayload,
  decodeSensorName,
  encodeActionMessage,
  encodeModuleConfigurationMessage,
  encodeModuleRegistrationMessage,
  encodeModuleRemovalMessage,
  encodeMorpheusConfigurationMessage,
  getTimestamp,
}
