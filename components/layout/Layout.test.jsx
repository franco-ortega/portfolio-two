import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Button component tests', () => {
  it('renders layout', () => {
    render(<Layout />);

    const element = screen.getByTestId('layout');

    expect(element).toBeInTheDocument();
  });
});
