import { render, screen } from '@testing-library/react';
import Project from './Project';

describe('Project component tests', () => {
  it('renders the Project component', () => {
    render(<Project />);

    const element = screen.getByTestId('project');

    expect(element).toBeInTheDocument();
  });
});
