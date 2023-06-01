const obj = {
  name: 'na2na',
  age: 22,
};

describe('matchObject', () => {
  it('オブジェクトのプロパティが一致する', () => {
    expect(obj).toMatchObject({
      name: 'na2na',
      age: 22,
    });
  });

  it('オブジェクトのプロパティ名のうち、nameが一致する', () => {
    expect(obj).toMatchObject({
      name: 'na2na',
    });
  });
});
