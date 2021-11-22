import { resolve } from 'path'
import { mkdirSync, writeFileSync } from 'fs-extra'
import logger from "../shared/logger"
import genViewsTemplate from '../templates/views'

const WRITE_FILE_OPTIONS = { encoding: 'utf-8' }

export default ({type, name, path}) => {
  const fileDir = resolve(path)
  logger.info(fileDir)

  mkdirSync(fileDir, {recursive: true})

  let filePath = ''
  switch(type) {
    case 'views':
      filePath = `${resolve(fileDir, 'index')}.vue`
      writeFileSync(filePath, genViewsTemplate(name), WRITE_FILE_OPTIONS)
      break;
    case 'components':
      break;
    case 'router':
      break;
    case 'pinia':
      break;
    default:
      break;
  }

  logger.success(
    `The ${type}: ${name} has been cretaed successfully`
  )
  logger.info(
    `Target directory: ${filePath}`
  )
}
