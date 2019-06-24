import axios from 'axios';
import Users from '@/mock-modules/users';

// axiosモジュールをモックにする
jest.mock('axios');
test('should fetch users', async () => {
  const users = [{ name: 'Bob' }];

  // `axios.get`メソッドを`{ data: [{ name: 'Bob' }] }`を返すモック関数にする
  // そのため、`Users.all`メソッド内で実行される`axios.get('/users.json')`は
  // `{ data: [{ name: 'Bob' }] }`を返すようになる
  axios.get.mockResolvedValue({ data: users });
  // ↑は以下の糖衣構文
  // axios.get.mockImplementation(() => Promise.resolve(resp));

  const response = await Users.all();
  expect(response).toEqual(users);
});
