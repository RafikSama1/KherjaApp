const {Router} = require("express");
const router = Router();

const voyagesControllers = require("../controllers/voyages.contollers");

router.get('/', voyagesControllers.index);
router.get('/:id', voyagesControllers.show);
router.post('/', voyagesControllers.store);
router.put('/:id', voyagesControllers.update);
router.delete('/:id', voyagesControllers.delete);


module.exports = router;