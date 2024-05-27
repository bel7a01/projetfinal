const Joi = require('joi');



const commentValidation = Joi.object({
    comments: Joi.string()
        .min(4)
        .max(70)
        .required(),

    username: Joi.string()
        .required()





})

module.exports = commentValidation