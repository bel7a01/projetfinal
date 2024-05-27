const mongoose = require('mongoose');
const UserSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, 'Please Enter Your Firstname']

        },

        lastname: {
            type: String,
            required: [true, 'Please Enter Lastname']
        }
        ,

        email: {
            type: String,
            requierd: [true, 'Please Enter Your Email']
        },
        username: {
            type: String,
            requierd: [true, 'Please Enter Your Username']
        },
        adress: {
            type: String,
            requierd: [true, 'Please Enter Your Adress']
        },
        city: {
            type: String,
            requierd: [true, 'Please Enter Your City']
        },
        phoneNumber: {
            type: Number,
            requierd: [true, 'Please Enter Your Phone Number ']
        },
        paymentMethode: {
            type: String,
            requierd: [true, 'Please Select Your PaymentMethode ']
        }


    }

)
module.exports = mongoose.model("user", UserSchema);