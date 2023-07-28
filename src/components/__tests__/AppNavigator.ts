import { mount } from '@vue/test-utils'
import { describe, expect,it } from 'vitest'

import AppNavigator from '../AppNavigator.vue'

describe('AppNavigator', () => {
  it('renders properly', () => {
    const wrapper = mount(AppNavigator, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
