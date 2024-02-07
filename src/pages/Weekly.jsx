import useData from "../hooks/useData";
export default function Weekly() {
  const data = useData("weekly");
  return data;
}
