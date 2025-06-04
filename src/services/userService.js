import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../models/userModel.js";
import { nanoid } from "nanoid";
import { hashPassword } from "../utils/hashPassword.js";

export const listUsers = () => getAllUsers();

export const findUser = (id) => getUserById(id);

export const addUser = (data) => {
  const user = { id: nanoid(), ...data, password: hashPassword(data.password) };
  return createUser(user);
};

export const editUser = (id, data) => updateUser(id, data);

export const removeUser = (id) => deleteUser(id);
