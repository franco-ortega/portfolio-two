import { render, screen } from '@testing-library/react';
import NavLink from './NavLink';

describe('Nav Link component tests', () => {
  it('renders nav link text', () => {
    const content = 'Home';
    const url = '/';

    render(<NavLink text={content} url={url} />);

    const link = screen.getByText(content);

    expect(link).toBeInTheDocument();
  });

  it('renders a link', () => {
    const content = 'About';
    const url = '/about';

    render(<NavLink text={content} url={url} />);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });
});
