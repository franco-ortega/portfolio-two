import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component tests', () => {
  it('renders a button', () => {
    const content = 'Hello';
    render(<Button handler={() => {}} text={content} />);

    const button = screen.getByText(content);

    expect(button).toBeInTheDocument();
  });

  it('clicks a button', () => {
    const content = 'Hello';
    const handler = jest.fn();

    render(<Button handler={handler} text={content} />);

    const button = screen.getByText(content);

    fireEvent.click(button);

    expect(handler).toHaveBeenCalled();
  });
});
