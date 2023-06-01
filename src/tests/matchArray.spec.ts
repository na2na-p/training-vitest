const arr = [
  { id: 1, name: 'Hoge' },
  { id: 2, name: 'Fuga' },
];

describe('matchArray', () => {
  it('配列の要素が一致する', () => {
    expect(arr).toMatchObject([
      { id: 1, name: 'Hoge' },
      { id: 2, name: 'Fuga' },
    ]);
  });

  it('配列の要素のうち、idが一致する', () => {
    expect(arr).toMatchObject([{ id: 1 }, { id: 2 }]);
  });
});
