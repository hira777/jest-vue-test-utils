describe('filter', () => {
  it('creates a new array with all elements that pass the test implemented', () => {
    const filterTestFn = jest.fn();
    // １回目の呼び出しは`true`を返し、2回目の呼び出しは`false`を返す
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const actual = [11, 12].filter(filterTestFn);

    expect(actual).toEqual([11]);
  });
});
