import { render, screen } from '@testing-library/react';
import ExternalLink from './ExternalLink';

describe('External Link component tests', () => {
  it('renders an external link', () => {
    const content = 'GitHub';
    const url = 'https://github.com/franco-ortega';

    render(<ExternalLink title={content} url={url} />);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });
});
