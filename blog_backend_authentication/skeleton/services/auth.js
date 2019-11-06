const validateInputs = require("../validation/register");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const register = async data => {
  try {
    const { message, isValid } = validateInputs(data);
    if (!isValid) {
      throw new Error(message);
    }
    const { name, email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User(
      {
        name,
        email,
        password: hashedPassword
      },
      err => {
        if (err) throw err;
      }
    );

    user.save();
    const id = user._doc._id;
    const token = jwt.sign({ id: user.id }, keys.secretOrKey);

    return { token, loggedIn: true, ...user._doc, id, password: null };
  } catch (err) {
    throw err;
  }
};

module.exports = { register };