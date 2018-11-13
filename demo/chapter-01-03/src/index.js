const Koa = require('koa');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = new Koa();
const port = 3000;

app.use(async function(ctx){
  return graphqlHTTP({
    schema: schema,
    graphiql: true
  })(ctx.req, ctx.res);
})

app.listen(port, function() {
  console.log(`this server is starting at port=${port}`);
});