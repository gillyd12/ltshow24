import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Product from '@/components/product/Product.vue';

describe('Product', () => {
  it('renders properly', () => {
    const wrapper = mount(Product, {})
    expect(wrapper.text()).toContain('Product')
  })
})
