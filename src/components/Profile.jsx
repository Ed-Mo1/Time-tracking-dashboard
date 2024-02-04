import { useContext } from "react";
import { UserContext } from "../Context/userData";

export default function Profile() {
  let { userImage } = useContext(UserContext);
  return (
    <div className="w-[80px] border-white border-[3px] aspect-square rounded-full md:mb-6">
      <img src={userImage} alt="profile" className="w-full" />
    </div>
  );
}
