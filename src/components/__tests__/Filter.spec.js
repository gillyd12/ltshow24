import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Filter from '../filter/Filter.vue'
import { useProductStore } from '@/stores/useProductStore'

vi.mock('@/stores/useProductStore')

let toggleSelectedFiltersMock;

beforeEach(() => {
  toggleSelectedFiltersMock = vi.fn();
  vi.mock('@/stores/useProductStore', () => ({
    useProductStore: vi.fn(() => ({
      filters: ['smartphones'],
      toggleSelectedFilters: toggleSelectedFiltersMock,
    })),
  }));
});

afterEach(() => {
  vi.clearAllMocks()
})

describe('Filter', () => {
  it('renders correctly with filters', () => {
    const wrapper = mount(Filter)
    expect(wrapper.text()).toContain('Filter by Product Category')
    expect(wrapper.findAll('.form-check-input').length).toBe(1)
  })

  it('calls toggleSelectedFilters with correct value on checkbox click', async () => {
    const wrapper = mount(Filter);
    await wrapper.find('input[type="checkbox"][value="smartphones"]').trigger('click');
  
    expect(toggleSelectedFiltersMock).toHaveBeenCalledWith('smartphones');
  })

  it('does not display filters when productStore.filters is empty', async () => {
    vi.mocked(useProductStore).mockImplementation(() => ({
      filters: [],
      toggleSelectedFilters: vi.fn()
    }))
    const wrapper = mount(Filter)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.options').exists()).toBe(false)
  })
})
