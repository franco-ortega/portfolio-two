import ProjectDetails from '../../components/projects/ProjectDetails';
import { getProjectsByTitle } from '../../services/projects';

export default function ProjectDetailsPage({ data }) {
  return <ProjectDetails data={data} />;
}

export async function getServerSideProps(context) {
  try {
    const data = await getProjectsByTitle(context.params.project);

    return {
      props: { isConnected: true, data }
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false }
    };
  }
}
