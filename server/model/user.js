import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    name: String,
    dob: String,
    sex: String,
    mobile: String,
    idtype: String,
    govtid: String,
    gaurdianlebel: String,
    gaurdianname: String,
    email: String,
    emergencycontact: String,
    address: String,
    state: String,
    city: String,
    country: String,
    pincode: Number,
    occupation: String,
    religion: String,
    meritalstatus: String,
    bloodgroup: String,
    nationality: String
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

export default postUser;