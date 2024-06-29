import { createContext, useState } from "react";

export const UserContext = createContext<userContextProps>( {user: null,  setUser: () => {} });

export interface UserProps {
      id: string,
      nomeCompleto: string,
      email: string,
      senha: string,
      nomeUsuario: string
}

export interface userContextProps {
  user: UserProps | null,
  setUser: React.Dispatch<React.SetStateAction<UserProps| null>>;
}
interface ContextProps{
  children: React.ReactNode
}

export const UserProvider = ({children} : ContextProps) =>{
  const [user, setUser] = useState<UserProps | null>(null);
  return (
    <UserContext.Provider
    value={{user,
      setUser}
    }
    >
      {children}
    </UserContext.Provider>
  )
}