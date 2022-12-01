import { render, screen } from '@testing-library/react';
import TechList from './TechList';
import testContent from '../../data/testContent.json';

describe('TechList component tests', () => {
  it('renders the TechList component', () => {
    render(<TechList tech={testContent[0].tech} />);

    const element = screen.getByTestId('tech-list');

    expect(element).toBeInTheDocument();
  });
});
