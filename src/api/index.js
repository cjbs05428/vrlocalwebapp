import axios from 'axios';

const url= 'https://vrlocalpoc-project.herokuapp.com/vrlocal';

export const fetchUsers = () => axios.get(url);

export const createUser = (newUser) => axios.post(url, newUser);
export const updateUser = (id, updatedUser) => axios.patch(`${url}/${id}`, updatedUser);
export const deleteUser = (id) => axios.delete(`${url}/${id}`);


