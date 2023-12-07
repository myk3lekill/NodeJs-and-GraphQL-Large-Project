const express = require('express');

const {makeExecutableSchema} = require('@graphql-tools/schema');

const schemaText = `      
type Query {
  products: [Product]
  orders: [Order]
}
`;

const schema = makeExecutableSchema({
  typeDefs: [schemaText]
})

const app = express();

//MiddleWare
app.use('/graphql', yoga)


app.listen(3000, () => {
    console.log('Running GraphQL server...')
});