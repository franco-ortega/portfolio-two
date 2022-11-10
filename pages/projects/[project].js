import ProjectDetails from '../../components/projects/ProjectDetails';

export default function ProjectDetailsPage({ data }) {
  return <ProjectDetails data={data} />;
}

export async function getServerSideProps(context) {
  try {
    const response = await getProjects();
    const [data] = response.filter(
      (project) => project.title.toLowerCase() === context.params.project
    );

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
