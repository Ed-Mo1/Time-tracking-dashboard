import useData from "../hooks/useData";
export default function Daily() {
  const data = useData("daily");
  return data;
}
