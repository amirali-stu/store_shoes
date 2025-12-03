import bcrypt from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

const hashedPassword = (password) => {
  const newPass = bcrypt.hashSync(password, 10);
  return newPass;
};
const confirmPasswordHashed = (password, passwordHashed) => {
  const isPass = bcrypt.compareSync(password, passwordHashed);
  return isPass;
};

const createToken = (email) => {
  const token = sign({ email }, process.env.PRIVET_TOKEN_KEY, {
    expiresIn: "1d",
  });
  return token;
};

const verifyToken = (token) => {
  const tokenVerified = verify(token, process.env.PRIVET_TOKEN_KEY);
  return tokenVerified;
};

export { hashedPassword, confirmPasswordHashed, createToken, verifyToken };
