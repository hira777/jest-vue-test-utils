import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ComponentWithVuex from '@/components/component-with-vuex/ComponentWithVuex.vue';

// グローバルに影響を与えないローカルのVueインスタンス
const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: 'alice'
  }
});
// `createLocalVue`や`Vuex`を利用しないモックのStore
const mockStore = {
  state: { username: 'alice' }
};

describe('ComponentWithVuex', () => {
  it('renders a username using a real Vuex store', () => {
    const wrapper = shallowMount(ComponentWithVuex, { store, localVue });

    expect(wrapper.find('.username').text()).toBe('alice');
  });

  it('renders a username using a mock store', () => {
    const wrapper = shallowMount(ComponentWithVuex, {
      mocks: { $store: mockStore }
    });

    expect(wrapper.find('.username').text()).toBe('alice');
  });
});
