import Projects from '../../components/projects/Projects';
// import { getProjects } from '../../services/projects';

export default function ProjectsPage() {
  return <Projects />;
}

// export async function getServerSideProps(context) {
//   try {
//     const response = await getProjects();

//     const data = JSON.parse(JSON.stringify(response));

//     return {
//       props: { isConnected: true, data }
//     };
//   } catch (e) {
//     console.error(e);
//     return {
//       props: { isConnected: false }
//     };
//   }
// }
