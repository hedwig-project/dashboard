export const getModuleLocationClass = (location) => {
  switch (location) {
    case 'ACCESS':
      return 'fa fa-lock'
    case 'AQUARIUM':
      return 'fa fa-tint'
    case 'KITCHEN':
      return 'fa fa-cutlery'
    case 'LAUNDRY':
      return 'fa fa-shirtsinbulk'
    case 'LIVING_ROOM':
      return 'fa fa-television'
    default:
      return 'fa fa-bullseye'
  }
}

export const getModuleLocationColorScheme = (location) => {
  switch (location) {
    case 'ACCESS':
      return ['#006064', '#00838F', '#0097A7', '#00ACC1', '#00BCD4', '#26C6DA', '#00B8D4']
    case 'AQUARIUM':
      return ['#F57F17', '#F9A825', '#FBC02D', '#FDD835', '#FFEB3B', '#FFEE58', '#FFAB00']
    case 'KITCHEN':
      return ['#4A148C', '#6A1B9A', '#7B1FA2', '#8E24AA', '#9C27B0', '#AB47BC', '#6200EA']
    case 'LAUNDRY':
      return ['#1B5E20', '#2E7D32', '#388E3C', '#43A047', '#4CAF50', '#66BB6A', '#00C853']
    case 'LIVING_ROOM':
      return ['#1A237E', '#283593', '#303F9F', '#3949AB', '#3F51B5', '#5C6BC0', '#304FFE']
    default:
      return ['#B71C1C', '#C62828', '#D32F2F', '#E53935', '#F44336', '#EF5350', '#D50000']
  }
}

export default {
  getModuleLocationClass,
  getModuleLocationColorScheme,
}
