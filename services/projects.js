import { getData } from './request';

export const getProjects = () => getData('/api/projects');
