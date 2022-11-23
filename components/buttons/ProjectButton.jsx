import { useRouter } from 'next/router';
import Button from './Button';

const ProjectButton = ({ title }) => {
  const router = useRouter();

  const onDetailsClick = () => router.push(`/projects/${title.toLowerCase()}`);

  return (
    <Button
      // customStyles={styles.DarkButton}
      handler={onDetailsClick}
      text={'Project Details'}
    ></Button>
  );
};

export default ProjectButton;
