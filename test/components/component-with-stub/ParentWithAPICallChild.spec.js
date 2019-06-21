import { shallowMount, mount } from '@vue/test-utils';
import ParentWithAPICallChild from '@/components/component-with-stub/ParentWithAPICallChild.vue';
import ComponentWithAsyncCall from '@/components/component-with-stub/ComponentWithAsyncCall.vue';

describe('ParentWithAPICallChild.vue', () => {
  it('renders with mount and does initialize API call', () => {
    const wrapper = mount(ParentWithAPICallChild, {
      // 今回、ComponentWithAsyncCallコンポーネントが正しく描画されるかをテストしたいため
      // ComponentWithAsyncCallコンポーネントの詳細を知る必要がない
      // そのため、ComponentWithAsyncCallコンポーネントをスタブに置き換える
      stubs: {
        ComponentWithAsyncCall: true
        // 以下のようにスタブのマークアップも指定できる
        // ComponentWithAsyncCall: "<div class='stub'></div>"
      }
    });

    expect(wrapper.find(ComponentWithAsyncCall).exists()).toBe(true);
  });

  // shallowMountを利用すれば他のコンポーネントを自動でスタブにしてくれるため
  // 上記のように書く必要はない
  it('renders with shallowMount and does not initialize API call', () => {
    const wrapper = shallowMount(ParentWithAPICallChild);

    expect(wrapper.find(ComponentWithAsyncCall).exists()).toBe(true);
  });
});
