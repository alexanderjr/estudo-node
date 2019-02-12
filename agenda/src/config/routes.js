const express = require("express");
const router = express();
const LoginController = require("../controllers/Login");
const ContactController = require("../controllers/Contact");
const AddressController = require("../controllers/Address");
const auth = require("../middlewares/auth");

router.post('/signup', LoginController.signup);
router.post('/login', LoginController.login);

router.get('/contacts', auth, ContactController.index);
router.post('/contacts', auth, ContactController.create);
router.put('/contacts/:contact', auth, ContactController.update);
router.get('/contacts/:contact', auth, ContactController.single);
router.delete('/contacts/:contact', auth, ContactController.delete);
router.post('/contacts/:contact/address', auth, AddressController.create);
router.delete('/contacts/:contact/address/:address', auth, AddressController.delete);

module.exports = router;