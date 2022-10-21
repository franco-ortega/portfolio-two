import Button from '../buttons/Button';

const Landing = ({ handler }) => {
  return (
    <div>
      <h1>Franco Ortega</h1>
      <h2>Software Engineer</h2>
      <Button handler={handler} text={'Welcome'} />
    </div>
  );
};

export default Landing;
