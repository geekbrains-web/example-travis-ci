const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: {type: String, index: true, unique: true, required: true, trim: true},
  password: {type: String, default: "", trim: true},
}, {
  timestamps: {createdAt: "created_at", updatedAt: false},
});

UserSchema.static("findByEmail", async function(email) {
  return await this.findOne({ email });
});

UserSchema.static("register", async function(email, password) {
  password = await bcrypt.hash(password, 12);
  return await this.create({email, password});
});

UserSchema.method("isPassword", async function(password) {
  return await bcrypt.compare(password, this.password);
});

module.exports = mongoose.model("User", UserSchema);
