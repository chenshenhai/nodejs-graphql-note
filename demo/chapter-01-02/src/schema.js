const {GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt} = require('graphql')
const data = require('./database/data.json')

const lang = new GraphQLObjectType({
  name: 'Language',
  description: 'Code Language',
  fields: {
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
  }
});

const query = new GraphQLObjectType({
  name: 'query',
  fields: {
    lang: {
      type: lang,
      args: {
        key: {
          type: GraphQLString
        }
      },
      resolve: function (_, args) {
        return data[args.key];
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: query
});

module.exports = schema;