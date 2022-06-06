import { defineComponent } from 'vue'
import { LabelInputProps } from './props'

export default defineComponent({
  name: 'LabelInput',
  props: LabelInputProps,
  setup(props, ctx) {
    return {}
  },
  render() {
    return (
      <div class="label-input__wrap">
        <input type="text" />
      </div>
    )
  }
})
