import { Route, Routes } from "react-router-dom";
import Daily from "../pages/Daily";
import Weekly from "../pages/Weekly";
import Monthly from "../pages/Monthly";
export default function TrackList() {
  return (
    <div className=" w-full md:w-auto grid-rows-1 grid-cols-1 gap-5 md:grow grid md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 md:gap-4 lg:gap-8 ">
      <Routes>
        <Route path="/time-tracking-dashboard/" element={<Daily />} />
        <Route path="/time-tracking-dashboard/weekly" element={<Weekly />} />
        <Route path="/time-tracking-dashboard/monthly" element={<Monthly />} />
      </Routes>
    </div>
  );
}
