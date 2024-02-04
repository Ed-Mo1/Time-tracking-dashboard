import { useContext } from "react";

import { UserContext } from "../Context/userData";
export default function UserName() {
  let { userName } = useContext(UserContext);
  return (
    <div className="">
      <h5 className="text-pale-blue">Report for</h5>
      <h1 className="text-xl md:text-5xl ">{userName}</h1>
    </div>
  );
}
