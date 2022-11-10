import { render, screen } from '@testing-library/react';
import Projects from './Projects';
import testContent from '../../data/testContent.json';

describe('Projects component tests', () => {
  it('renders the Projects component', () => {
    render(<Projects data={testContent} />);

    const element = screen.getByTestId('projects');

    expect(element).toBeInTheDocument();
  });
});
