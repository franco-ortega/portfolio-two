import { render, screen } from '@testing-library/react';
import SocialLink from './SocialLink';

describe('Nav Link component tests', () => {
  it('renders nav link text', () => {
    const content = 'Home';
    const url = '/';

    render(<SocialLink text={content} url={url} />);

    const link = screen.getByText(content);

    expect(link).toBeInTheDocument();
  });

  it('renders a link', () => {
    const content = 'About';
    const url = '/about';

    render(<SocialLink text={content} url={url} />);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });
});
