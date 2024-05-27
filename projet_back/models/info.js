const mongoose = require('mongoose');
const InfoSchema = mongoose.Schema(
    {
        location: {
            type: String,
            required: [true, 'Please Enter Your Location']

        },

        date: {
            type: String,
            required: [true, 'Please Enter the date']
        }
        ,

        time: {
            type: String,
            requierd: [true, 'Please Enter the time']
        }
    }

)
module.exports = mongoose.model("Info", InfoSchema);