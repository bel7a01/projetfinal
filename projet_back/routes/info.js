const router = require("express").Router()
const {
    GetInfo,
    createinfo,
    updateInfo
} = require("../controllers/info");

router.get('/', GetInfo)
router.put('/', updateInfo)

module.exports = router