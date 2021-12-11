import { resolve } from 'path'
import { mkdirSync, writeFileSync } from 'fs-extra'
import logger from "../shared/logger"
import genViewsTemplate from '../templates/createViews'
import { genComponentsIndexTemplate, genComponentsVueTemplate } from '../templates/createComponents'
import { MKDIR_FILE_OPTIONS, WRITE_FILE_OPTIONS } from '../shared/constant'

export default ({type, name, path}) => {
  const fileDir = resolve(path)
  logger.info(fileDir)

  mkdirSync(fileDir, MKDIR_FILE_OPTIONS)

  let filePath = ''
  switch(type) {
    case 'views':
      filePath = `${resolve(fileDir, 'index')}.vue`
      writeFileSync(filePath, genViewsTemplate(name), WRITE_FILE_OPTIONS)
      break;
    case 'components':
      filePath = `${resolve(fileDir, 'index')}.ts`
      const cpnSrcDir = resolve(fileDir, 'src')
      const cpnVueDir = `${resolve(cpnSrcDir, name)}.vue`

      mkdirSync(cpnSrcDir, MKDIR_FILE_OPTIONS)
      writeFileSync(filePath, genComponentsIndexTemplate(name, fileDir), WRITE_FILE_OPTIONS)
      writeFileSync(cpnVueDir, genComponentsVueTemplate(name), WRITE_FILE_OPTIONS)
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
