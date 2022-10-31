import { fireEvent, render, screen } from '@testing-library/react';
import DarkButton from './DarkButton';

describe('DarkButton component tests', () => {
  it('renders button for dark mode', () => {
    const content = '';
    const handler = jest.fn();

    render(<DarkButton handler={handler} text={content} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('clicks button for dark mode', () => {
    const content = '';
    const handler = jest.fn();

    render(<DarkButton handler={handler} text={content} />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(handler).toHaveBeenCalled();
  });
});
