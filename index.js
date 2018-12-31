const app = require('./api');

(async () => {
  try {
    const port = process.env.IMAGE_RESIZER_PORT || 3000;
    await app.listen(port);
    console.log(`Listening on Port ${port}`);
  } catch (e) {
    console.error('There was an issue.');
  }
})();
