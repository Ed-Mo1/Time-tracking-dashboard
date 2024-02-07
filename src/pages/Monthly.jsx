import useData from "../hooks/useData";
export default function Monthly() {
  const data = useData("monthly");
  return data;
}
