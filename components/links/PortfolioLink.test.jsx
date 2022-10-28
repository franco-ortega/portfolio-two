import { render, screen } from '@testing-library/react';
import PortfolioLink from './PortfolioLink';

describe('Nav Link component tests', () => {
  it('renders nav link text', () => {
    const content = 'Home';
    const url = '/';

    render(<PortfolioLink text={content} url={url} />);

    const link = screen.getByText(content);

    expect(link).toBeInTheDocument();
  });

  it('renders a link', () => {
    const content = 'About';
    const url = '/about';

    render(<PortfolioLink text={content} url={url} />);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });
});
