import { render, screen } from '@testing-library/react';
import ProjectButton from './ProjectButton';

describe('ProjectButton component tests', () => {
  it('renders button for project details', () => {
    const content = 'Project Details';

    render(<ProjectButton title={content} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
