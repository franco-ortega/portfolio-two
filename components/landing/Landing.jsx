import Button from '../buttons/Button';

const Landing = () => {
  return (
    <div>
      <h1>Franco Ortega</h1>
      <h2>Software Engineer</h2>
      <Button handler={() => console.log('welcome!')} text={'Welcome'} />
    </div>
  );
};

export default Landing;
