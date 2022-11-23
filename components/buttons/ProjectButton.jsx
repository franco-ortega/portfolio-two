import Button from './Button';

const ProjectButton = ({ handler }) => {
  return (
    <Button
      // customStyles={styles.DarkButton}
      handler={handler}
      text={'Project Details'}
    ></Button>
  );
};

export default ProjectButton;
