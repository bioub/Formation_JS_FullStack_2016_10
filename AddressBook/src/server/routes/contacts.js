const Router = require('express').Router;
const contacts = require('../controllers/contacts');

const router = new Router();

router.get('/', contacts.list);
router.post('/', contacts.add);
router.get('/:id', contacts.show);
router.put('/:id', contacts.modify);
router.delete('/:id', contacts.remove);

module.exports = router;
