import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ComponentWithVuexGetters from '@/components/component-with-vuex/ComponentWithVuexGetters.vue';

// グローバルに影響を与えないローカルのVueインスタンス
const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    firstName: 'Alice',
    lastName: 'Doe'
  },
  getters: {
    fullname: state => state.firstName + ' ' + state.lastName,
    fullnameUsingMapGetters: state => state.firstName + ' ' + state.lastName
  }
});
// `createLocalVue`や`Vuex`を利用しないモックのStore
const mockStore = {
  state: { username: 'alice' },
  getters: {
    fullname: 'Alice Doe',
    fullnameUsingMapGetters: 'Alice Doe'
  }
};

describe('ComponentWithVuexGetters', () => {
  it('renders a fullname using a real Vuex getter', () => {
    const wrapper = shallowMount(ComponentWithVuexGetters, { store, localVue });

    expect(wrapper.find('.fullname').text()).toBe('Alice Doe');
  });

  // コンポーネントが mapState や mapGetter を利用していても、テストコードは変わらない
  it('renders a fullname using a real Vuex map getter', () => {
    const wrapper = shallowMount(ComponentWithVuexGetters, { store, localVue });

    expect(wrapper.find('.fullnameUsingMapGetter').text()).toBe('Alice Doe');
  });

  it('renders a fullname using a mock store', () => {
    const wrapper = shallowMount(ComponentWithVuexGetters, {
      mocks: { $store: mockStore }
    });

    expect(wrapper.find('.fullname').text()).toBe('Alice Doe');
  });

  it('renders a username using computed mounting options', () => {
    const wrapper = shallowMount(ComponentWithVuexGetters, {
      // NOTE: `data(){}`でオーバーライドしようと思ったらできなかった
      mocks: { $store: mockStore },
      // 今回のテストはコンポーネントが正しく動作しているかどうかをテストしたいため
      // 利用しているゲッターが正しく動作しているかどうかは確認する必要はない
      // そのためゲッターを利用している`computed`を固定値を返すモックに置き換えても問題ない
      computed: {
        fullname: () => 'Alice Doe'
      }
    });

    expect(wrapper.find('.fullname').text()).toBe('Alice Doe');
  });
});
