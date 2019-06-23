import { shallowMount } from '@vue/test-utils';
import Level from '@/components/snapshot-testing/Level.vue';

describe('Level.vue', () => {
  it('good', () => {
    const wrapper = shallowMount(Level, {
      propsData: { level: 'good' }
    });

    expect(wrapper.find({ ref: 'good' }).isVisible()).toBe(true);
    expect(wrapper.find({ ref: 'veryGood' }).isVisible()).toBe(false);
    expect(wrapper.find({ ref: 'excellent' }).isVisible()).toBe(false);
  });

  it('veryGood', () => {
    const wrapper = shallowMount(Level, {
      propsData: { level: 'veryGood' }
    });

    expect(wrapper.find({ ref: 'good' }).isVisible()).toBe(false);
    expect(wrapper.find({ ref: 'veryGood' }).isVisible()).toBe(true);
    expect(wrapper.find({ ref: 'excellent' }).isVisible()).toBe(false);
  });

  it('excellent', () => {
    const wrapper = shallowMount(Level, {
      propsData: { level: 'excellent' }
    });

    expect(wrapper.find({ ref: 'good' }).isVisible()).toBe(false);
    expect(wrapper.find({ ref: 'veryGood' }).isVisible()).toBe(false);
    expect(wrapper.find({ ref: 'excellent' }).isVisible()).toBe(true);
  });

  it('empty string', () => {
    const wrapper = shallowMount(Level);

    expect(wrapper.isVisible()).toBe(false);
  });

  describe('snapshot', () => {
    it('good', () => {
      const wrapper = shallowMount(Level, {
        propsData: { level: 'good' }
      });
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('veryGood', () => {
      const wrapper = shallowMount(Level, {
        propsData: { level: 'veryGood' }
      });

      expect(wrapper.html()).toMatchSnapshot();
    });

    it('excellent', () => {
      const wrapper = shallowMount(Level, {
        propsData: { level: 'excellent' }
      });

      expect(wrapper.html()).toMatchSnapshot();
    });

    it('empty string', () => {
      const wrapper = shallowMount(Level);

      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
