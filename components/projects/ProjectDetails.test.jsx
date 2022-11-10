import { render, screen } from '@testing-library/react';
import ProjectDetails from './ProjectDetails';
import testContent from '../../data/testContent.json';

describe('ProjectDetails component tests', () => {
  it('renders the ProjectDetails component', () => {
    render(<ProjectDetails {...testContent[0]} />);

    const element = screen.getByTestId('project-details');

    expect(element).toBeInTheDocument();
  });
});
