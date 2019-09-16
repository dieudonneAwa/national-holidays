import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 9000;

app.listen(port, () => console.log('running on port 9000'));
