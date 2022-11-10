import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects component tests', () => {
  it('renders the Projects component', () => {
    render(<Projects />);

    const element = screen.getByTestId('projects');

    expect(element).toBeInTheDocument();
  });
});
