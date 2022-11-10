import { render, screen } from '@testing-library/react';
import Project from './Project';
import testContent from '../../data/testContent.json';

describe('Project component tests', () => {
  it('renders the Project component', () => {
    render(<Project {...testContent[0]} />);

    const element = screen.getByTestId('project');

    expect(element).toBeInTheDocument();
  });
});
