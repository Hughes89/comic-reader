/*
 * @CreateTime: Oct 6, 2018 11:38 PM
 * @Author: Mike Hughes
 * @Contact: mik3h89@gmail.com
 * @Last Modified By: Mike Hughes
 * @Last Modified Time: Oct 7, 2018 12:08 AM
 * @Description: Handle all routing used by the comic server
 */


// =============================================================================
// Express - Router
// =============================================================================
const express = require('express');
const router = express.Router();


// =============================================================================
// Controllers
// =============================================================================

const comicController = require('../comic/comicController');


// ========================================================================
// Comic - Routes (/comic/)
// ========================================================================

router.route('/comic/:id/pages').get(comicController.getAllPages);
router.route('/comic/:id/:filename').get(comicController.getPage);

module.exports = router;
