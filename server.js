const express = require('express');

const {makeExecutableSchema} = require('@graphql-tools/schema');

const schemaText = `      
type Query {
  products: [Product]
  orders: [Order]
}
type Product {
  id: ID!
  description: String!
  price: Float!
  reviews: [Review] 
}
type Review {
  rating: Int!
  comment: String
}
type Order {
  date: String!
  subtotal: Float!
  items: [OrderItem]
}
type OrderItem {
  product: Product!
  quantity: Int!
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