import prompts from 'prompts'
import logger from '../shared/logger'
import { onPromptsCancel } from '../shared/utils'
import createFile from './create-file'
import { createRoute } from './create-route'
import { isEmpty, validPath, validNeedRoute } from '../shared/validate'

const CREATE_TYPES = ['views', 'components', 'router', 'pinia']

let type = ''
let name = ''
let path = ''
let needRoute = ''

export async function onCreate(cmd) {
  const step1 = await prompts(
    [
      {
        name: 'type',
        type: 'select',
        message: 'Please select a type',
        choices: CREATE_TYPES.map((value, idx) => ({
          title: value,
          value,
          selected: idx === 0
        }))
      },
      {
        name: 'name',
        type: 'text',
        message:
          'Please input the name u want to create, it will be used for the floder name',
        validate: (e) => !isEmpty(e)
      }
    ],
    {
      onCancel: onPromptsCancel
    }
  )
  type = step1.type
  name = step1.name

  const step2 = await prompts(
    [
      {
        name: 'path',
        type: 'text',
        message: 'Please makesure the path(click Tab to edit the path)',
        initial: `src/${type}/${name}`,
        validate: (e) => validPath(e, type)
      },
      {
        name: 'needRoute',
        type: 'text',
        message: 'do u need to create route?(y/n)',
        initial: 'y',
        validate: (e) => validNeedRoute(e)
      }
    ],
    {
      onCancel: onPromptsCancel
    }
  )
  path = step2.path
  needRoute = step2.needRoute

  if (needRoute === 'y') {
    const routePath = path.replace('views', 'router')
    const step3 = await prompts([
      {
        name: 'routePath',
        type: 'text',
        message: 'enter your route path',
        initial: routePath
      }
    ])
    createRoute(routePath, path)
  }
  // createFile({
  //   type, name, path
  // })
}
