import { camelCase, upperFirst } from 'lodash-es'

export function onPromptsCancel() {
  throw new Error('Operation cancelled.')
}

export function bigCamelCase(str) {
  return upperFirst(camelCase(str))
}

// 来自webpack的方法，检查包是否安装
export function pluginIsInstalled(packageName) {
  try {
    require.resolve(packageName)

    return true
  } catch (err) {
    return false
  }
}
