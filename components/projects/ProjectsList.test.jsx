import { render, screen } from '@testing-library/react';
import ProjectsList from './ProjectsList';
import testContent from '../../data/testContent.json';

describe('ProjectsList component tests', () => {
  it('renders the ProjectsList component', () => {
    render(<ProjectsList {...testContent[0]} />);

    const element = screen.getByTestId('projects-list');

    expect(element).toBeInTheDocument();
  });
});
