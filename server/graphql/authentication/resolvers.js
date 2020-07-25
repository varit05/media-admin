const db = require("../db");
const jwt = require("jsonwebtoken");

const Query = {
  login: async (
    _, {
      email,
      password
    }
  ) => {
    const user = db.users.list().find((user) => user.email === email && user.password === password);
    if (!user) {
      return {
        userId: null
      }
    }
    // password compare
    //   const isPasswordCorrect = bcrypt.compare(password, user.password);
    //   if (!isPasswordCorrect) {
    //     throw new Error('User password and username is incorrect');
    //   }

    const token = jwt.sign({
      userId: user.id,
      email: user.email
    }, process.env.NUXT_ENV_JWT_TOKEN, {
      expiresIn: '1h'
    });

    return {
      userId: user.id,
      token,
      tokenExpiration: 1
    }
  }
}

module.exports = {
  Query,
};
