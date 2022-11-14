import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import testContent from '../data/testContent.json';

export const useProject = () => {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(
      ...testContent.filter(
        (item) => item.title.toLowerCase() === router.query.project
      )
    );
  }, [data, router.query.project]);

  return { data };
};
