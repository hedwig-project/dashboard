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
    .map(item => ({
        module: convertTopicToModuleId(item.topic),
        data: {
          humidity: item.payload.vl1,
          temperature: item.payload.vl2,
          presence: item.payload.vl3,
          relay1: item.payload.vl4,
          relay2: item.payload.vl5,
        }
      })
    )
}

export default {
  convertTopicToModuleId,
  decodeDataMessage,
}
