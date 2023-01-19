import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import button from '../button.vue';

describe('test Button', () => {
  it('slot test', () => {
    const wrapper = mount(button, {
      slots: {
        default: 'Hello world'
      }
    });
    expect(wrapper.text()).toContain('Hello world');
  });
  it('type test', () => {
    const wrapper = mount(button, {
      props: {
        type: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('ls-button-primary');
  });
  it('size test', () => {
    const wrapper = mount(button, {
      props: {
        type: 'hh1'
      }
    });
    expect(wrapper.classes()).toContain('ls-button-hh1');
  });
  it('size test', () => {
    const wrapper = mount(button, {
      props: {
        round: 'true'
      }
    });
    expect(wrapper.classes()).toContain('is-round');
  });
});
