const Joi = require('joi');

const InfoValidation = Joi.object({
    location: Joi.string()
        .min(3)
        .max(40)
        .required(),

    date: Joi.string(),


    time: Joi.string()


})


module.exports = InfoValidation