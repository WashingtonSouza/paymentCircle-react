const BillingCyle = require('./billingCycle')

BillingCyle.methods(['get', 'post', 'put', 'delete'])
BillingCyle.updateOptions({ new: true, ruValidators: true })

BillingCyle.route('count', (req, res, next) => {
  BillingCyle.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] })
    } else {
      res.json({ value })
    }
  })
})


module.exports = BillingCyle