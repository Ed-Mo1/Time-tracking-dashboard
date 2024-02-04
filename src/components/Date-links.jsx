import { NavLink } from "react-router-dom";
export default function DateLinks({ type, name }) {
  return (
    <NavLink
      to={type}
      end
      className={({ isActive }) =>
        isActive
          ? "text-white w-fit"
          : "text-pale-blue w-fit hover:text-white transition-colors"
      }
    >
      {name}
    </NavLink>
  );
}
