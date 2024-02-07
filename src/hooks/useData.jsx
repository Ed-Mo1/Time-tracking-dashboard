import data from "../../data.json";
import TrackCard from "../components/TrackCard";

function useData(type) {
  const details = data.map(
    (
      {
        title,
        timeframes: {
          [type]: { current, previous },
        },
      },
      i
    ) => {
      return (
        <TrackCard
          type={
            type == "monthly" ? "Monthly" : type == "daily" ? "Daily" : "weekly"
          }
          key={i}
          title={title}
          current={current}
          previous={previous}
        />
      );
    }
  );
  return details;
}

export default useData;
