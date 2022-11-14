import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import testContent from '../../data/testContent.json';

const ProjectDetails = () => {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(
      ...testContent.filter(
        (item) => item.title.toLowerCase() === router.query.project
      )
    );
  }, [data, router.query.project]);

  return (
    <div data-testid='project-details'>
      {data && (
        <>
          <h2>{data.title}</h2>
          <ul>
            {data.techList.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
          <p>{data.description}</p>
          <ul>
            {data.challenges.map((challenge, i) => (
              <li key={i}>{challenge}</li>
            ))}
          </ul>
          <ul>
            {data.learnings.map((learning, i) => (
              <li key={i}>{learning}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ProjectDetails;
