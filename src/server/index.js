const app = require('./app');

const port = app.get('port');
app.listen(port, () => {
  console.log(`server now listening to http://localhost:${port}`);
});
