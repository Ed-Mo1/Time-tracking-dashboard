import User from "./User";
import DateLinks from "./Date-links";
export default function Aside() {
  return (
    <div className="w-full md:w-auto md:basis-1/5  rounded-2xl bg-dark-blue ">
      <User />
      <ul className="flex justify-center md:flex-col gap-2 mt-6 list-none px-7 pb-4 md:pb-0">
        <DateLinks type="/time-tracking-dashboard/"   name='Daily'/>
        <DateLinks type="/time-tracking-dashboard/weekly"name='Weekly'  />
        <DateLinks type="/time-tracking-dashboard/monthly" name='Monthly' />
      </ul>
    </div>
  );
}
