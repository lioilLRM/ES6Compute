function digitalization(str) {
  return Number(str) || 0
}

function trimSpace(str) {
  return str.replace(/\s+/, '')
}

export {
  digitalization,
  trimSpace
}