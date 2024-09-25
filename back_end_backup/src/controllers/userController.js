import {
  createUserService,
  getUserService,
  loginService,
} from "../services/userServices.js";

export const createUser = async (req, res) => {
  console.log("check req.body ", req.body);
  const { name, email, password } = req.body;
  const data = await createUserService(name, email, password);
  return res.status(200).json(data);
};

export const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log("check req.body ", req.body);
  const data = await loginService(email, password);
  return res.status(200).json(data);
};

export const getUser = async (req, res) => {
  const data = await getUserService();
  return res.status(200).json(data);
};
