import { shallowMount } from '@vue/test-utils';
import ComponentWithEmitter from '@/components/component-with-emitter/ComponentWithEmitter.vue';

describe('ComponentWithEmitter.vue', () => {
  // 2つの引数を持つイベントがemitされているか
  it('emits an event with two arguments', () => {
    const wrapper = shallowMount(ComponentWithEmitter);

    // emitEventメソッドを実行する
    wrapper.vm.emitEvent();

    console.log(wrapper.emitted());
    // => { myEvent: [ [ 'name', 'password' ] ] }

    expect(wrapper.emitted().myEvent[0]).toEqual(['name', 'password']);
  });

  it('emits an event without mounting the component', () => {
    const events = {};
    // $emitのモック
    const $emit = (event, ...args) => {
      events[event] = [...args];
    };

    // emitEventメソッドをcallで実行するため、this.$emitが↑で定義した
    // $emitのモックに置き換わった状態でメソッドが実行される
    ComponentWithEmitter.methods.emitEvent.call({ $emit });

    expect(events.myEvent).toEqual(['name', 'password']);
  });
});
