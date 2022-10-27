import { render, screen } from '@testing-library/react';
import NavLink from './NavLink';

describe('Nav Link component tests', () => {
  it('renders nav link text', () => {
    const content = 'Home';
    render(<NavLink text={content} url={'/'} />);

    const link = screen.getByText(content);

    expect(link).toBeInTheDocument();
  });

  it('renders a link', () => {
    const url = '/about';
    render(<NavLink text={'About'} url={url} />);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });
});
