const InfoSchema = require("../models/info")
const InfoValidation = require("../validation/info")




const GetInfo = async (req, res) => {
    try {
        let Info = await InfoSchema.find()
        res.status(200).json(Info);
    } catch (e) {
        res.status(500).json({ message: "error retrieving info" })
    }

}


const updateInfo = async (req, res) => {
    let { error, value } = InfoValidation.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message })
    }
    try {
        console.log(value);
        const info = await InfoSchema.findByIdAndUpdate('66539a14516c92387bd3f2c4', value, { new: true })
        res.json(info)
    } catch (e) {
        return res.status(404).json({ message: "no infos" });
    }
}


module.exports = {
    GetInfo,
    updateInfo
}