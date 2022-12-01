import { render, screen } from '@testing-library/react';
import TechsList from './TechsList';
import testContent from '../../data/testContent.json';

describe('TechsList component tests', () => {
  it('renders the TechsList component', () => {
    render(<TechsList tech={testContent[0].tech} />);

    const element = screen.getByTestId('projects-list');

    expect(element).toBeInTheDocument();
  });
});
