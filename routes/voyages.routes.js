const {Router} = require("express");
const router = Router();

const voyagesControllers = require("../controllers/voyages.contollers");

router.get('/', voyagesControllers.index);

module.exports = router;