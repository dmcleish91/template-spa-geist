import { createContext, ReactNode, useState } from 'react';

export type User = {
  id: number;
  email?: string;
  admin?: boolean;
  first?: string;
  last?: string;
  title?: string;
  phone?: string;
  inactive?: boolean;
  password?: string;
};

type UserContextType = {
  user: User | null;
  updateCurrentUser: (user: User) => void;
};

const defaultUserContext: UserContextType = {
  user: null,
  updateCurrentUser: () => {},
};

export const UserContext = createContext(defaultUserContext);

export function UserProvider(props: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  function updateUserData(user: User) {
    setUser(user);
  }

  const context: UserContextType = {
    user: user,
    updateCurrentUser: updateUserData,
  };

  return <UserContext.Provider value={context}>{props.children}</UserContext.Provider>;
}

export default UserProvider;
