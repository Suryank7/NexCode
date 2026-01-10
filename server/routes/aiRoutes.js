const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

router.post('/generate', aiController.generateCode);
router.post('/explain', aiController.explainCode);

module.exports = router;
