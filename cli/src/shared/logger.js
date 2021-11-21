import { lightBlue, lightGreen, lightYellow, lightRed } from 'kolorist'

const logger = {
  PERFIX: '[CODERWHY-CMS]',
  info(msg) {
    console.log(lightBlue(`✈ ${logger.PERFIX} - ${msg}`))
  },
  success(msg) {
    console.log(lightGreen(`✔ ${logger.PERFIX} - ${msg}`))
  },
  warn(msg) {
    console.log(lightYellow(`▶ ${logger.PERFIX} - ${msg}`))
  },
  error(msg) {
    console.log(lightRed(`✖ ${logger.PERFIX} - ${msg}`))
  }
}

export default logger
