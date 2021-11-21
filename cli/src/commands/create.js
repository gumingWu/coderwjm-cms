import prompts from 'prompts'
import logger from '../shared/logger'
import { onPromptsCancel } from '../shared/utils'
import { isEmpty, validPath } from '../shared/validate'

const CREATE_TYPES = ['views', 'components', 'router', 'pinia']

let type = ''
let name = ''
let path = ''

export async function onCreate(cmd) {
  const result1 = await prompts(
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
  type = result1.type
  name = result1.name

  const result2 = await prompts(
    [
      {
        name: 'path',
        type: 'text',
        message: 'Please makesure the path',
        initial: `src/${type}/${name}`,
        validate: (e) => validPath(e, type)
      }
    ],
    {
      onCancel: onPromptsCancel
    }
  )
  path = result2.path

  logger.success(type)
  logger.success(name)
  logger.success(path)
}
