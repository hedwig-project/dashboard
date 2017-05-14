export const normalizeCpf = (value) => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 3) {
    return onlyNums
  }
  if (onlyNums.length <= 6) {
    return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3)}`
  }
  if (onlyNums.length <= 9) {
    return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}.${onlyNums.slice(6, 9)}`
  }
  return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}.${onlyNums.slice(6, 9)}-${onlyNums.slice(9, 11)}`
}

export const normalizeCnpj = (value) => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 2) {
    return onlyNums
  }
  if (onlyNums.length <= 5) {
    return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2)}`
  }
  if (onlyNums.length <= 8) {
    return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}.${onlyNums.slice(5)}`
  }
  if (onlyNums.length <= 11) {
    return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}.${onlyNums.slice(5, 8)}/${onlyNums.slice(8)}`
  }
  return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}.${onlyNums.slice(5, 8)}/${onlyNums.slice(8, 12)}-${onlyNums.slice(12, 14)}`
}

export const normalizeDate = (value) => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 2) {
    return onlyNums
  }
  if (onlyNums.length <= 4) {
    return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2)}`
  }
  return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}/${onlyNums.slice(4, 8)}`
}

export const normalizeNumber = (value) => {
  if (!value) {
    return value
  }

  return value.replace(/[^\d]/g, '')
}

export const normalizePhone = (value) => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 2) {
    return `(${onlyNums}`
  }
  if (onlyNums.length <= 6) {
    return `(${onlyNums.slice(0, 2)})${onlyNums.slice(2)}`
  }
  if (onlyNums.length <= 10) {
    return `(${onlyNums.slice(0, 2)})${onlyNums.slice(2, 6)}-${onlyNums.slice(6, 10)}`
  }
  return `(${onlyNums.slice(0, 2)})${onlyNums.slice(2, 7)}-${onlyNums.slice(7, 11)}`
}
