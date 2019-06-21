import mutations from '@/store/simple-example/mutations.js';

describe('SET_POST', () => {
  it('state に投稿を追加する ', () => {
    const post = { id: 1, title: 'post' };
    const state = {
      postIds: [],
      posts: {}
    };

    mutations.SET_POST(state, { post });

    expect(state).toEqual({
      postIds: [1],
      posts: { '1': post }
    });
  });
});
