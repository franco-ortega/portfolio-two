import { render, screen } from '@testing-library/react';
import Project from './Project';

describe('Project component tests', () => {
  it('renders the Project component', () => {
    const title = 'Title';
    const techList = ['Tech 1', 'Tech 2', 'Tech 3'];
    const description =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates architecto commodi harum accusantium voluptatibus debitis dolor minus quasi molestiae maxime, cum autem id excepturi adipisci.';
    const challenges = [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, in.',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, in.',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, in.'
    ];
    const learnings = [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, in.',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, in.',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, in.'
    ];
    render(
      <Project
        title={title}
        techList={techList}
        description={description}
        challenges={challenges}
        learnings={learnings}
      />
    );

    const element = screen.getByTestId('project');

    expect(element).toBeInTheDocument();
  });
});
