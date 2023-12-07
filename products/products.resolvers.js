const productsModel = require('./products.model')

module.exports = {
    Query: { 
        products: async (parent, args, context, info) => {
        console.log('Getting the products...');
        const product = await Promise.resolve(productsModel.getAllProducts());
        return product;
      },

    }
}