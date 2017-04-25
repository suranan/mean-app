module.exports = function(router) {
    var invoice = require('../controllers/invoice.controller');
    router.route('/invoice').get(invoice.list).post(invoice.read);
    router.route('/invoice/add').post(invoice.create);
    router.route('/invoice/:invoicecode').get(invoice.read);
    router.param('invoicecode', invoice.getInvoice);
}