import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const white_list = ["/", "/register", "/login"];
  if (white_list.find((item) => `/v1/api` + item == req.originalUrl)) {
    next();
  } else {
    if (req?.headers?.authorization?.split(" ")?.[1]) {
      const token = req.headers.authorization.split(" ")[1];
      console.log(token);

      // verify token
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        next();
      } catch (error) {
        return res.status(401).json({
          message: "Token khong hop le hoac het han",
        });
      }
    } else {
      return res.status(401).json({
        message: "Ban chua truyen access token o header /Hoac token bi het han",
      });
    }
  }
};

export default auth;
