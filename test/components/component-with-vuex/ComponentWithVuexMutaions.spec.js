import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ComponentWithVuexMutaions from '@/components/component-with-vuex/ComponentWithVuexMutaions.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
  testMutation: jest.fn()
};

const store = new Vuex.Store({ mutations });

describe('ComponentWithVuexMutaions', () => {
  // 1. 正しいミューテーションがコミットされたか
  // 2. ペイロードが正しいか
  it('commits a mutation when a button is clicked', () => {
    const wrapper = shallowMount(ComponentWithVuexMutaions, {
      store,
      localVue
    });

    wrapper.find('.commit').trigger('click');

    expect(mutations.testMutation).toHaveBeenCalledWith(
      // 第1引数にはstateが渡されるが、今回は何も宣言していないので空のオブジェクトが渡される
      {},
      { msg: 'Test Commit' }
    );
  });

  it('commits a mock mutation when a button is clicked', () => {
    const mockStore = {
      commit: jest.fn()
    };
    const wrapper = shallowMount(ComponentWithVuexMutaions, {
      mocks: {
        $store: mockStore
      }
    });

    wrapper.find('.commit').trigger('click');

    expect(mockStore.commit).toHaveBeenCalledWith('testMutation', {
      msg: 'Test Commit'
    });
  });
});
