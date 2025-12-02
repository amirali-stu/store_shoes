import bcrypt from "bcryptjs";

const hashedPassword = (password) => {
  const newPass = bcrypt.hashSync(password, 10);
  return newPass;
};
const confirmPasswordHashed = (password, passwordHashed) => {
  const isPass = bcrypt.compareSync(password, passwordHashed);
  return isPass;
};

export { hashedPassword, confirmPasswordHashed };
