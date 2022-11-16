import { render, screen } from '@testing-library/react';
import WebsiteLink from './WebsiteLink';

describe('WebsiteLink component tests', () => {
  it('renders a GitHub link', () => {
    const url = 'https://github.com/franco-ortega';

    render(<WebsiteLink url={url} />);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });
});
