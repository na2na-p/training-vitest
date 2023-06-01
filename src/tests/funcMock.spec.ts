describe('funcMock', () => {
  it('モック関数が呼ばれる', () => {
    const mockFn = vi.fn();
    mockFn();
    expect(mockFn).toHaveBeenCalled();
  });

  it('モック関数がtestという文字列を返す', () => {
    const mockFn = vi.fn().mockReturnValue('test');
    expect(mockFn()).toBe('test');
  });

  it('モック関数が1回だけ呼ばれる', () => {
    const mockFn = vi.fn();
    mockFn();
    expect(mockFn).toBeCalledTimes(1);
  });
});
