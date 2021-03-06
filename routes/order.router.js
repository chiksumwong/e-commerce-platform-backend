const orderController = require('./../controllers/order.controller')

module.exports = (router) => {
    router.route('/order').post(orderController.addOrder);
    router.route('/order/:product_id').put(orderController.updateOrder);
    // get order by user id
    router.route('/orders/:user_id').get(orderController.getOrderByUserId);
    // get product order by seller id (user id)
    router.route('/productsOrders/:seller_id').get(orderController.getOrderBySellerId);
}