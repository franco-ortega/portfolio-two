import testContent from '../../data/testContent.json';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const data = testContent;

    res.status(200).json(data);
  }
}
