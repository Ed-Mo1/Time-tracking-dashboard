import { NavLink } from "react-router-dom";
export default function DateLinks({ type, name }) {
  // const navigate=useNavigate
  return (
    <NavLink
      to={type}
      replace="true"
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
