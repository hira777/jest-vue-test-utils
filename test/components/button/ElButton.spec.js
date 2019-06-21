import { shallowMount } from '@vue/test-utils';

import ElButton from '@/components/button/ElButton.vue';

describe('ElButton', () => {
  it('create', () => {
    const wrapper = shallowMount(ElButton, {
      propsData: { type: 'primary' }
    });
    expect(wrapper.contains('.el-button--primary')).toBe(true);
  });

  it('icon', () => {
    const wrapper = shallowMount(ElButton, {
      propsData: { icon: 'el-icon-search' }
    });
    expect(wrapper.contains('.el-icon-search')).toBe(true);
  });

  it('nativeType', () => {
    const wrapper = shallowMount(ElButton, {
      propsData: { nativeType: 'submit' }
    });
    expect(wrapper.attributes().type).toBe('submit');
  });

  it('loading', () => {
    const wrapper = shallowMount(ElButton, {
      propsData: { loading: true }
    });
    expect(wrapper.contains('.is-loading')).toBe(true);
    expect(wrapper.contains('.el-icon-loading')).toBe(true);
  });

  it('disabled', () => {
    const wrapper = shallowMount(ElButton, {
      propsData: { disabled: true }
    });
    expect(wrapper.contains('.is-disabled')).toBe(true);
  });

  it('size', () => {
    const wrapper = shallowMount(ElButton, {
      propsData: { size: 'medium' }
    });
    expect(wrapper.contains('.el-button--medium')).toBe(true);
  });

  it('plain', () => {
    const wrapper = shallowMount(ElButton, {
      propsData: { plain: true }
    });
    expect(wrapper.contains('.is-plain')).toBe(true);
  });

  it('round', () => {
    const wrapper = shallowMount(ElButton, {
      propsData: { round: true }
    });
    expect(wrapper.contains('.is-round')).toBe(true);
  });

  it('circle', () => {
    const wrapper = shallowMount(ElButton, {
      propsData: { circle: true }
    });
    expect(wrapper.contains('.is-circle')).toBe(true);
  });

  it('click', () => {
    const wrapper = shallowMount(ElButton);
    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('click inside', () => {
    const wrapper = shallowMount(ElButton, {
      slots: {
        default: '<span class="inner-slot"></span>'
      }
    });
    wrapper.find('.inner-slot').trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('loading implies disabled', () => {
    const wrapper = shallowMount(ElButton, {
      propsData: { loading: true }
    });
    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });
});
