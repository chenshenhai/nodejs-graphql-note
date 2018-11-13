const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const page = require('./page');

const app = express();
const port = 3000;

app.use('/graphql', graphqlHTTP(request => {
  return {
    schema: schema,
    context: { startTime: Date.now() },
    graphiql: true,
  };
}));

app.use('/', function(req, res) {
  const html = page('index.html');
  res.write(html);
  res.end();
})

app.listen(port, function() {
  console.log(`this server is starting at port=${port}`);
});