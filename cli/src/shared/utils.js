import { camelCase, upperFirst } from 'lodash-es'

export function onPromptsCancel() {
  throw new Error('Operation cancelled.')
}

export function bigCamelCase(str) {
  return upperFirst(camelCase(str))
}
