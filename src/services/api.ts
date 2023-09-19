import { LoginPayloadRequest, RegisterPayloadRequest, User } from '../meta/interfaces/user';

const api = {

  authUser: async (payload: LoginPayloadRequest): Promise<User | Error> => {
    const users: string | null = localStorage.getItem('users');

    //  case we don't have users created
    if (!users) throw new Error('No users');

    else {
      const parsedUsers: User[] = JSON.parse(users);
      const result: User | undefined = parsedUsers.find(user => user.email === payload.email && user.password === payload.password);
      if (result) return result;
    }

     throw new Error('No users');
  },

  // simulation of saving a user - using local storage as a "database"
  createUser: async (payload: RegisterPayloadRequest): Promise<void> => {
    const users: string | null = localStorage.getItem('users');

    const userAccount: User = {
      ...payload,
    };

    // if we don't have any users, create one into local storage
    if (!users) {
      localStorage.setItem('users', JSON.stringify([userAccount]));
    }
    // if we have users, push the newest
    else {
      const updatedUsers: User[] = JSON.parse(users);
      localStorage.setItem('users', JSON.stringify([...updatedUsers, userAccount]));
    }
  },
};

export default api;
