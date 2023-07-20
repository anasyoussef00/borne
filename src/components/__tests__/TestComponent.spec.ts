import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import TestComponent from '../TestComponent.vue';

describe('Test Component', () => {
  it('renders properly', () => {
    const wrapper = mount(TestComponent);
    expect(wrapper.text()).toContain('TEST COMPONENT');
    expect(wrapper.get('button').classes()).toStrictEqual([
      'bg-violet-500',
      'text-white',
      'p-2',
    ]);
    expect(wrapper.get('button').text()).toContain(
      'GO TO ANOTHER TEST COMPONENT'
    );
  });
});
