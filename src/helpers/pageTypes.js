import { OPTIONS_PAGE_TYPE, PAGE_TYPE_ICONS } from '@consts/pageTypes'

const safeGetProp = (obj, prop) => {
  if (typeof obj === 'object') {
    return obj[prop]
  }
}
export const getIconForPageType = pageType =>
  PAGE_TYPE_ICONS[pageType]

export const getLabelForPageType = pageType =>
  safeGetProp(OPTIONS_PAGE_TYPE.find(opt => opt.value === pageType), 'label')
