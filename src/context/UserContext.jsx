import { createContext,useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Jayanti Thakor",
    email: "jayantithakor941@gmail.com",
  });

  return(
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  )
};
