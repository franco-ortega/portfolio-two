import testContent from '../../../data/testContent.json';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const response = testContent;

    const data = response.filter(
      (project) => project.title.toLowerCase() === req.query.project
    );

    // data is an array, but need to pass a single object to ProjectDetails
    res.status(200).json(data[0]);
  }
}
