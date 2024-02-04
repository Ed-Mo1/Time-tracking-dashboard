import TrackCard from "../components/TrackCard";
import data from "../../data.json";
export default function Weekly() {
  return (
    <>
      {data.map(
        (
          {
            title,
            timeframes: {
              weekly: { current, previous },
            },
          },
          i
        ) => {
          return (
            <TrackCard
              type="Week"
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
