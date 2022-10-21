import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('renders Button component', () => {
  it('renders a button', () => {
    render(<Button handler={() => {}} text={'Hello'} />);

    const button = screen.getByText('Hello');

    expect(button).toBeInTheDocument();
  });
});
