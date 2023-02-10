import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy name",
    email: "dum@gmail.com",
  },
});
export default UserContext;
