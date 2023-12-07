const express = require('express');
const path = require('path');
const {loadFilesSync} = require('@graphql-tools/load-files')
const {makeExecutableSchema} = require('@graphql-tools/schema');

const typesArray = loadFilesSync('**/*', {
  extensions: ['graphql'],
});

const schema = makeExecutableSchema({
  typeDefs: typesArray
})

const app = express();

//MiddleWare
app.use('/graphql', yoga)


app.listen(3000, () => {
    console.log('Running GraphQL server...')
});