import { renderHook } from '@testing-library/react-hooks';

const useHooks = ({
  argNumber,
  handler,
}: {
  argNumber: number;
  handler: (name: string) => void;
}) => {
  handler('handler args');

  return {
    argNumber,
  };
};

describe('useHooks', () => {
  it('idが渡されてsuperHeavyIdが返る', () => {
    const id = 1;
    const { result } = renderHook(() =>
      useHooks({ argNumber: id, handler: vi.fn() })
    );
    expect(result.current.argNumber).toBe(id);
  });

  it('handlerが実行される', () => {
    const mockFn = vi.fn();
    renderHook(() => useHooks({ argNumber: 1, handler: mockFn }));
    expect(mockFn).toHaveBeenCalled();
  });
});
