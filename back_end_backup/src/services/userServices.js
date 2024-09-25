import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { name } from "ejs";
import jwt from "jsonwebtoken";
const saltRounds = 10;

export const createUserService = async (name, email, password) => {
  try {
    // check user exist
    const user = await User.findOne({ email });

    if (user) {
      console.log("User exists");
      return;
    }

    //B1 hash user password ==> nếu không sài async await thì sài bcrypt.hashSync(password) ==> còn trong trường hợp này đang sài async await nên chỉ sài bcrypt.hash()

    const hashPassword = await bcrypt.hash(password, saltRounds);
    //B2 Save User
    let result = await User.create({
      name,
      email,
      password: hashPassword,
      role: "user",
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const loginService = async (email, password) => {
  try {
    // fetch user by id or email or name .....
    const user = await User.findOne({
      email,
    });
    console.log(">> check user", user);
    if (user) {
      const isMatchPassword = await bcrypt.compare(password, user.password);
      if (!isMatchPassword) {
        return {
          EC: 2,
          EM: "Email/ Password not found",
        };
      } else {
        // create an access token
        const payload = {
          email: user.email,
          name: user.name,
        };
        console.log(
          process.env.JWT_SECRET,
          process.env.JWT_EXPIRE,
          "check env"
        );
        const access_token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRE,
        });
        return {
          EC: 0,
          access_token,
          user: {
            email: user.email,
            name: user.name,
          },
        };
      }
    } else {
      return {
        EC: 1,
        EM: "Email/Password not found",
      };
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getUserService = async () => {
  try {
    let result = await User.find({});
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
