// API.mjs

import { readFile } from 'fs/promises';
import { createServer } from 'http';

const PORT = 3000;
const FILE_PATH = './watches.json';

const server = createServer(async (req, res) => {
  try {
    // Read data from the JSON file
    const data = await readFile(FILE_PATH, 'utf-8');
    const jsonData = JSON.parse(data);

    // Check if the request is for categories.html
    if (req.url === '/categories.html') {
      // Return the watches data as JSON
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(jsonData.watches));
    } else {
      // Handle other routes or invalid paths
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});





// Handle server shutdown gracefully
process.on('SIGINT', () => {
  console.log('\nReceived SIGINT. Closing server gracefully.');
  server.close(() => {
    console.log('Server closed. Exiting process.');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Closing server gracefully.');
  server.close(() => {
    console.log('Server closed. Exiting process.');
    process.exit(0);
  });
});
