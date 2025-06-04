import * as userService from "../services/userService.js";

export const getUsers = (req, res) => {
  const users = userService.listUsers();
  res.json(users);
};

export const getUser = (req, res) => {
  const user = userService.findUser(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

export const createUser = (req, res) => {
  const user = userService.addUser(req.body);
  res.status(201).json(user);
};

export const updateUser = (req, res) => {
  const user = userService.editUser(req.params.id, req.body);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

export const deleteUser = (req, res) => {
  const success = userService.removeUser(req.params.id);
  if (!success) return res.status(404).json({ message: "User not found" });
  res.status(204).end();
};
