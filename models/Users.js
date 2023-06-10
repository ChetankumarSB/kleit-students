const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    data: {
        type: Object,
        required: true,
    }
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;