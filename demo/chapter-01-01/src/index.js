const Koa = require('koa');
const graphqlHTTP = require('koa-graphql');
const schema = require('./schema');

const app = new Koa();
const port = 3000;

app.use(graphqlHTTP({
  schema: schema,
  graphiql: true
}));
app.listen(port, function() {
  console.log(`this server is starting at port=${port}`);
});