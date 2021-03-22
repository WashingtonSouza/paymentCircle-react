const express = require('express')

module.exports = (server) => {
  //Define URL base for all routes
  const router = express.Router()
  server.use('/api', router)

  //Billing cycle routes
  const BillingCyle = require('../api/billingCycle/billingCycleService')
  BillingCyle.register(router, '/billingCycles')
}