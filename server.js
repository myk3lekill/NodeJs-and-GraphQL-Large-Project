const express = require('express');
const { createSchema } = require('graphql-yoga');
const { createYoga } = require('graphql-yoga');

const schema = createSchema({
    typeDefs: /* GraphQL */ `
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
    `,
    resolvers: {
      Query: {
        products: () => [
          {
            id: 'redshoe',
            description: 'Red Shoe',
            price: 42.12,
          },
          {
            id: 'bluejean',
            description: 'Blue Jeans',
            price: 55.55
          },
        ],
        orders: () => [
          {
            date: '2005-05-05',
            subtotal:  90.22,
            items: [
              {
                product: {
                  id:  'redshoe',
                  description:  'Old Red Shoe',
                  price: 45.11
                },
                quantity: 2,
              }
            ]
          }
        ]
      }
    }
  });

  const yoga = createYoga({
    schema,
    context: (req) => ({ // Context factory gets called for every request
        //myToken: req.headers.get('authorization') // I've commented this line because it was causing problems and it seems to work :)
    }),
    graphiql: true,
  })

const app = express();

//MiddleWare
app.use('/graphql', yoga)


app.listen(3000, () => {
    console.log('Running GraphQL server...')
});