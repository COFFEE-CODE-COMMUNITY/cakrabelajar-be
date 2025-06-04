let users = [];

export const getAllUsers = () => users;
export const getUserById = (id) => users.find((u) => u.id === id);
export const createUser = (user) => {
  users.push(user);
  return user;
};
export const updateUser = (id, data) => {
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return null;
  users[idx] = { ...users[idx], ...data };
  return users[idx];
};
export const deleteUser = (id) => {
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return false;
  users.splice(idx, 1);
  return true;
};
