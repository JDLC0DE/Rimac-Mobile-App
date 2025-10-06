import { createContext, useContext, useState } from "react";
import GetUserEntity from "../features/Home/domain/entities/getUser.entity";

type UserState = DataState<GetUserEntity>;

interface DataState<T> {
  isLoading: boolean;
  error: boolean;
  data: T;
}

type Props = {
  children: React.ReactNode;
};

interface Context {
  userData: UserState;
  setUserData: React.Dispatch<React.SetStateAction<UserState>>;
}

const UserContext = createContext<Context>({} as Context);

const initState = {
  isLoading: false,
  error: false,
  data: {} as GetUserEntity,
};

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [userData, setUserData] = useState<UserState>(initState);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): Context => useContext(UserContext);
