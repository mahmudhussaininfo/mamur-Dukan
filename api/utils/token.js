import JWT from "jsonwebtoken";

// token encode
export const tokenEncode = (email) => {
  const payload = { email };
  const key = process.env.JWT_KEY;
  const expire = { expiresIn: process.env.JWT_EXPIRE };
  return JWT.sign(payload, key, expire);
};

// token decode
export const tokenDecode = (token) => {
  try {
    const key = process.env.JWT_KEY;
    const decode = JWT.verify(token, key);

    if (decode.email) {
      const refreshToken = JWT.sign(
        {
          email: decode.email,
        },
        key,
        {
          expiresIn: process.env.JWT_EXPIRE_REFRESH,
        }
      );

      return {
        email: decode.email,
        refreshToken,
      };
    }
  } catch (error) {
    return null;
  }
};
