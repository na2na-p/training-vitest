function isString(arg?: string): boolean {
  if (arg === undefined) {
    return false;
  }
  if (typeof arg === 'string') {
    return true;
  }
  // NOTE: ここに来ることはない
  return false;
}

describe('isString', () => {
  it('文字列が渡されてtrueが返る', () => {
    expect(isString('test')).toBe(true);
  });

  it('undefinedが渡されてfalseが返る', () => {
    expect(isString(undefined)).toBe(false);
  });
});
