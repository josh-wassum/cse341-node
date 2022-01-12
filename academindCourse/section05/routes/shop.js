const path = require('path');

express = require('express');

const rootDir = require('../util/path');

router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;