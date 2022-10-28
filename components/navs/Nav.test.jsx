import { render, screen } from '@testing-library/react';
import Nav from './Nav';

describe('Nav component tests', () => {
  it('renders the nav component', () => {
    render(<Nav />);

    const element = screen.getByTestId('nav');

    expect(element).toBeInTheDocument();
  });
});
