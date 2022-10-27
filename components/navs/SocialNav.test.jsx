import { render, screen } from '@testing-library/react';
import SocialNav from './SocialNav';

describe('SocialNav component tests', () => {
  it('renders the social nav', () => {
    render(<SocialNav />);

    const element = screen.getByTestId('social-nav');

    expect(element).toBeInTheDocument();
  });
});
