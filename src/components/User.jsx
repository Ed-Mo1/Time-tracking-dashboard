import Profile from "./Profile";

import UserName from "./UserName";

import UserProvidor from "../Context/userData";
export default function User() {
  return (
    <div className="bg-desaturated-blue h-4/6 py-8 md:pt-10 md:pb-24 rounded-2xl px-5 md:px-7 flex flex-col gap-7">
      <UserProvidor>
        <div className="flex items-center justify-start gap-4 md:block">
          <Profile />
          <UserName />
        </div>
      </UserProvidor>
    </div>
  );
}
