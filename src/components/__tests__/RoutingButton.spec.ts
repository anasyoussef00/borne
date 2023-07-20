import { describe, it, expect, vi } from 'vitest';

import { mount } from '@vue/test-utils';
import RoutingButton from '../btns/RoutingButton.vue';

describe('Routing Button Component', () => {
  it('renders properly', () => {
    const wrapper = mount(RoutingButton, {
      global: {
        stubs: {
          RouterLink: {
            template: '<a/>',
          },
        },
      },
      props: {
        name: 'test-view',
        label: 'test',
        arLabel: 'test',
      },
    });
    interface IRoutingButtonProps {
      name: string;
      label: string;
      arLabel: string;
    }
    expect(wrapper.classes()).toStrictEqual(['routing-btn']);
    expect(wrapper.props()).toContain<IRoutingButtonProps>({
      name: 'test-view',
      label: 'test',
      arLabel: 'test',
    });
  });
});
