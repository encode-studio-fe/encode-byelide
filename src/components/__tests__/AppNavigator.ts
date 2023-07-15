import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppNavigator from '../AppNavigator.vue'

describe('AppNavigator', () => {
  it('renders properly', () => {
    const wrapper = mount(AppNavigator, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
