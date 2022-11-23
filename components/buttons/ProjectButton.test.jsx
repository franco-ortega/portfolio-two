import { fireEvent, render, screen } from '@testing-library/react';
import ProjectButton from './ProjectButton';

describe('ProjectButton component tests', () => {
  it('renders button for dark mode', () => {
    const content = 'Project Details';
    const handler = jest.fn();

    render(<ProjectButton handler={handler} text={content} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('clicks button for dark mode', () => {
    const content = 'Project Details';
    const handler = jest.fn();

    render(<ProjectButton handler={handler} text={content} />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(handler).toHaveBeenCalled();
  });
});
