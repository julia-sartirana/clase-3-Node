const express = require('express');
const userController = require('../controllers/userControllers')
const router = express.Router() // va a escuchar especificamente a estas rutas

console.log(userController)

router.get('/', userController.getUsers); 
router.get('/:id', userController.getUser);
router.post('/', userController.postUser);
router.put("/:id", userController.putUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;