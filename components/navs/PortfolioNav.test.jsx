import { render, screen } from '@testing-library/react';
import PortfolioNav from './PortfolioNav';

describe('PortfolioNav component tests', () => {
  it('renders the portfolio nav', () => {
    render(<PortfolioNav />);

    const element = screen.getByTestId('portfolio-nav');

    expect(element).toBeInTheDocument();
  });
});
