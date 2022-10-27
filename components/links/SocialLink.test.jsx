import { render, screen } from '@testing-library/react';
import SocialLink from './SocialLink';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

describe('Social Link component tests', () => {
  it('renders a link', () => {
    const content = 'GitHub';
    const url = 'https://github.com/franco-ortega';
    const iconStyle = { fontSize: 30 };

    render(
      <SocialLink title={content} url={url} icon={faGithub} style={iconStyle} />
    );

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });
});
