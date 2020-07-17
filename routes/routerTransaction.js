const express = require('express');
const routerTransaction = express.Router();
const { postTransactions, getTransactions} = require('../controllers/transaction')

routerTransaction.route('/transaction').post(postTransactions);
routerTransaction.route('/transaction').get(getTransactions);

routerTransaction.get('/', (req, res) => {
    try {
        res.status(200).json({message: 'API has been started '});
    } catch (e) {
        res.status(500).json({message: `Error , ${e.message}`})
    }
})

module.exports = routerTransaction;
