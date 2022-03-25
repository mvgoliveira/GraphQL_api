import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  
  email: {
    type: String
  },

  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

const UserModel = mongoose.model('Users', UserSchema);

export { UserModel }