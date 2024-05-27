const Joi = require('joi');

const UserValidation = Joi.object({
    firstname: Joi.string()
        .min(3)
        .max(40)
        .required(),

    lastname: Joi.string()
        .min(3)
        .max(40)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    username: Joi.string()
        .required(),
    adress: Joi.string()
        .required(),
    city: Joi.string()
        .required(),
    phoneNumber: Joi.number()
        .required(),
    paymentMethode: Joi.string()
        .required()


})


module.exports = UserValidation