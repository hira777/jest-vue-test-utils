import actions from '@/store/simple-example/actions.js';

let url = '';
let body = {};
let mockError = false;

// axiosモジュールをモックにする
jest.mock('axios', () => ({
  // postメソッドをオーバーライドする
  post: (_url, _body) => {
    return new Promise(resolve => {
      if (mockError) throw Error('Mock error');
      url = _url;
      body = _body;
      resolve(true);
    });
  }
}));

describe('authenticate', () => {
  it('authenticated a user ', async () => {
    // Vuexの依存を排除するために、commitはモックを利用する
    const commit = jest.fn();
    const username = 'alice';
    const password = 'password';

    await actions.authenticate({ commit }, { username, password });

    // axios.post()に渡されたURLが正しいか
    expect(url).toBe('/api/authenticate');
    // axios.post()に渡されたrequest bodyが正しいか
    expect(body).toEqual({ username, password });
    // commitが正しく実行されたか
    expect(commit).toHaveBeenCalledWith('SET_AUTHENTICATED', true);
  });

  it('catches an error', async () => {
    mockError = true;

    await expect(
      actions.authenticate({ commit: jest.fn() }, {})
    ).rejects.toThrow('API Error occurred.');
  });
});
