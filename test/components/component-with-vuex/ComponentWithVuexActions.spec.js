import { shallowMount } from '@vue/test-utils';
import ComponentWithVuexActions from '@/components/component-with-vuex/ComponentWithVuexActions.vue';

// 1. 正しいアクションがdispatchされたか
// 2. ペイロードが正しいか
it('dispatches an action when a button is clicked', () => {
  const mockStore = { dispatch: jest.fn() };
  const wrapper = shallowMount(ComponentWithVuexActions, {
    mocks: {
      $store: mockStore
    }
  });

  wrapper.find('.dispatch').trigger('click');

  expect(mockStore.dispatch).toHaveBeenCalledWith('testAction', {
    msg: 'Test Dispatch'
  });
});
