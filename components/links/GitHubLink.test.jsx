import { render, screen } from '@testing-library/react';
import GitHubLink from './GitHubLink';

describe('External Link component tests', () => {
  it('renders a GitHub link', () => {
    const url = 'https://github.com/franco-ortega';

    render(<GitHubLink url={url} />);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });
});
