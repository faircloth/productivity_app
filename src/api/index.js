// node runs file with strict interpretation
'use strict';

var express = require('express');
var router = express.Router();

// route imports
router.use(require('./routes/note'));
router.use(require('./routes/player'));
router.use(require('./routes/scrape'));

// export the router
module.exports = router;
