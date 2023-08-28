const router = require('express').Router()
const deptRoutes = require('./departments')
const roleRoutes = require('./roles')
const empRoutes = require('./employees')

router.use('/api/departments', deptRoutes)
router.use('/api/roles', roleRoutes)
router.use('/api/employees', empRoutes)

module.exports = router