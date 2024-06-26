const {Router} = require("express");
const router = Router();
const objectIdMiddleware = require("../middelware/validObjectId.middleware");

const voyagesControllers = require("../controllers/voyages.contollers");

router.get('/kherja', voyagesControllers.index);
router.get('/kherja/:id',objectIdMiddleware, voyagesControllers.show);
router.post('/kherja', voyagesControllers.store);
router.put('/kherja/:id',objectIdMiddleware, voyagesControllers.update);
router.delete('/kherja/:id',objectIdMiddleware, voyagesControllers.delete);


module.exports = router;