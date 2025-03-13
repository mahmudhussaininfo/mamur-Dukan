import { tokenDecode } from "../utils/token.js";

export default (req, res, next) => {
  try {
    let token = req.cookies.Token;

    if (
      !token &&
      req.headers.authorization &&
      req.headers.authorization.startsWtih("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Token is required" });
    }

    const decoded = tokenDecode(token);

    if (!decoded) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }

    const options = {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };
    res.cookie("Token", decoded.refreshToken, options);
    req.user = {
      email: decoded.email,
    };
    next();
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
};
