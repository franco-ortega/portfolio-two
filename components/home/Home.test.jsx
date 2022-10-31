import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component tests', () => {
  it('renders home', () => {
    render(<Home />);

    const element = screen.getByTestId('home');

    expect(element).toBeInTheDocument();
  });
});
