const express = require('express');

const router = express.Router();

/**
 * @swagger
 * /:
 *  get:
 *    responses:
 *      '200':
 *        description: 'OK'
 */
router.get('/', (req, res) => res.json({ message: 'Hi, How are you?' }));

module.exports = router;
