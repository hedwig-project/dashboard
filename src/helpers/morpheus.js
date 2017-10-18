/* eslint-disable */

export const convertTopicToModuleId = (topic) => {
  const re = /hw\/(\w+)/
  return re.exec(topic)[1]
}

export const decodeDataMessage = (message) => {
  return message
    .filter(item => item.controlParameters.reduce((result, param) => {
      return param.value === 'temp_umi_pres' || result
    }, false))
    .map(item => {
      return ({
        module: convertTopicToModuleId(item.topic),
        data: {
          ...decodePayload(item.payload),
          lastUpdatedAt: getTimestamp(item.controlParameters),
        },
      })
    }
    )
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
  }
}

export const getTimestamp = (parameters) => {
  const ts = parameters.filter(param => param.parameter === 'ts')

  return ts[0].value
}

export default {
  convertTopicToModuleId,
  decodeDataMessage,
  decodePayload,
  decodeSensorName,
  getTimestamp,
}
