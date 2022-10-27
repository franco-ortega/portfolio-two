import { render, screen } from '@testing-library/react';
import NavLink from './NavLink';

describe('Nav Link component tests', () => {
  it('renders a nav link', () => {
    const content = 'Home';
    render(<NavLink title={content} url={''} />);

    const link = screen.getByText(content);

    expect(link).toBeInTheDocument();
  });
});
