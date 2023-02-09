import React, { createContext, useState } from "react";

export const userContext = createContext();

const UserContext = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
  });
  const [form, setForm] = useState(userData);

  const value = { userData, setUserData, form, setForm };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserContext;
