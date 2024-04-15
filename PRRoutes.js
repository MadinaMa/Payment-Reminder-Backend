const { Router } = require ('express');
const { getPR, savePRs, editPR, deletePR } = require('./PRController');

const router = Router();

router.get ('/', getPR);
router.post ('/savePRs', savePRs);
router.put('/editPR', editPR);
router.post('/deletePR', deletePR);








module.exports = router;