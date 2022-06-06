import { PropType } from 'vue'

export const LabelInputProps = {
  label: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '200px'
  },
  animation: {
    type: Boolean,
    default: false
  },
  animationClass: {
    type: Object as PropType<AnimationClassType>
  }
}

export type AnimationClassType = {
  borderColor: string
  textColor: string
  direction: 'leftTop' | 'rightTop' | 'leftBottom' | 'rightBottom'
}
