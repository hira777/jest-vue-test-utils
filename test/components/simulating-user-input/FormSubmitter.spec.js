import flushPromises from 'flush-promises';
import { shallowMount } from '@vue/test-utils';
import FormSubmitter from '@/components/simulating-user-input/FormSubmitter.vue';

let url = '';
let data = '';

const mockHttp = {
  get: (_url, _data) => {
    return new Promise(resolve => {
      url = _url;
      data = _data;
      resolve();
    });
  }
};

describe('FormSubmitter.vue', () => {
  it('フォームをサブミットするとお知らせを表示', () => {
    const wrapper = shallowMount(FormSubmitter);

    // ユーザー入力を再現する
    wrapper.find('[data-username]').setValue('alice');
    wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.find('.message').text()).toBe(
      'Thank you for your submission, alice.'
    );
  });

  it('フォームをサブミットするとお知らせを表示（非同期）', async () => {
    const wrapper = shallowMount(FormSubmitter, {
      data() {
        return {
          asyncTest: true
        };
      },
      mocks: {
        // this.$httpをモック関数にする
        $http: mockHttp
      }
    });

    wrapper.find('[data-username]').setValue('alice');
    wrapper.find('form').trigger('submit.prevent');

    // サブミット時の非同期処理が完了するのを待つ
    // そうしないと、非同期処理の完了前にアサートが実行され、テストが失敗する
    await flushPromises();

    expect(wrapper.find('.message').text()).toBe(
      'Thank you for your submission, alice.'
    );
    expect(url).toBe('/api/v1/register');
    expect(data).toEqual({ username: 'alice' });
  });
});
