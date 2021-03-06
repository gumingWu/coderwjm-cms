import logger from "./logger"

export function isEmpty(e) {
  return e === ''
}

export function validPath(e, type) {
  return e.startsWith(`src/${type}`)
}

export function validNeedRoute(e) {
  return ['y', 'n'].includes(e)
}
