import { createContext, useState } from "react";

export const UserContext = createContext();
import profile from "../../images/image-jeremy.png";
export default function UserProvidor({ children }) {
  let [data, setData] = useState({
    userImage: profile,
    userName: "Jeremy Robson",
  });
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}
