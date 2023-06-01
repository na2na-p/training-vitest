import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button.component';

describe('Button', () => {
  const setup = ({
    disabled = false,
    onClick,
    dataTestid,
  }: {
    disabled?: boolean;
    onClick?: () => void;
    dataTestid?: string;
  }) => {
    const user = userEvent.setup();
    const utils = render(
      <Button onClick={onClick} disabled={disabled} dataTestid={dataTestid} />
    );
    return { utils, user };
  };

  it('ボタンコンポーネントが存在する', () => {
    const dataTestid = 'button';
    setup({ dataTestid });
    const button = screen.getByTestId(dataTestid);
    expect(button).toBeInTheDocument();
  });

  it('ボタンコンポーネントが存在する2', () => {
    setup({});
    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('ボタンクリックしたらonClickで渡したハンドラが動く', async () => {
    const dataTestid = 'button';
    const onClick = vi.fn();
    setup({ onClick, dataTestid });

    const button = screen.getByTestId(dataTestid);
    expect(button).toBeInTheDocument();

    await waitFor(() => userEvent.click(screen.getByRole('button')));
    expect(onClick).toBeCalled();
    expect(onClick).toBeCalledTimes(1);
  });

  it('disabledがtrueならボタンがクリックできなくなる', async () => {
    const dataTestid = 'button';
    const onClick = vi.fn();
    setup({ disabled: true, dataTestid });

    const button = screen.getByTestId(dataTestid);
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();

    await waitFor(() => userEvent.click(screen.getByRole('button')));
    expect(onClick).not.toBeCalled();
  });
});
