import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/api/health', (req, res) => {
  res.json({
    message: 'Server is running ✌️🙂.',
  });
});

const user = { name: 'John', age: 25 };

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
