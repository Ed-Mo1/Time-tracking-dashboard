import TrackCard from "../components/TrackCard";
import data from "../../data.json";
export default function Monthly() {
  return (
    <>
      {data.map(
        (
          {
            title,
            timeframes: {
              monthly: { current, previous },
            },
          },
          i
        ) => {
          return (
            <TrackCard
              type="Month"
              key={i}
              title={title}
              current={current}
              previous={previous}
            />
          );
        }
      )}
    </>
  );
}
