import { getData } from './request';

export const getProjects = () => getData('/api/projects');

export const getProjectsByTitle = (title) => getData(`/api/projects/${title}`);
