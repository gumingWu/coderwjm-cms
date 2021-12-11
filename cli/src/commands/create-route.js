import { resolve } from 'path'
import { mkdirSync, writeFileSync } from 'fs-extra'
import logger from '../shared/logger'
import { MKDIR_FILE_OPTIONS, WRITE_FILE_OPTIONS } from '../shared/constant'
import { genRouterTemplate } from '../templates/createRouter'

export function createRoute(routePath, viewName, viewPath) {
  const fileDir = resolve(routePath)

  mkdirSync(fileDir, MKDIR_FILE_OPTIONS)

  const filePath = `${resolve(fileDir, 'index')}.ts`
  const viewFilePath = `${resolve(viewPath, 'index')}.vue`

  writeFileSync(filePath, genRouterTemplate(routePath, viewName, viewPath), WRITE_FILE_OPTIONS)

  logger.success(
    `route file: ${viewName} has been cretaed successfully`
  )
}
