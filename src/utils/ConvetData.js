export function convertDate(date) {
  const dateNow = new Date().toISOString()
  const fullDate = new Date(dateNow).toLocaleDateString()

  const converted = new Date(date)

  const days = converted.toLocaleDateString()
  const hours = converted.toLocaleTimeString()

  const today = new Date()

  const AUX_01 = new Date(today.getTime())
  AUX_01.setDate(today.getDate() - 1)
  const yesterday = AUX_01.toLocaleDateString()

  if (days === fullDate) {
    return `Hoje as ${hours}`
  } else if (days === yesterday) {
    return `Ontem as ${hours}`
  } else {
    return `${days} as ${hours}`
  }
}
