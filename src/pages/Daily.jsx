import TrackCard from "../components/TrackCard";
import data from '../../data.json'
export default function Daily() {
  return (
    <>
      {data.map(
        (
          {
            title,
            timeframes: {
              daily: { current, previous },
            },
          },
          i
        ) => {
          return (
            <TrackCard
              type="Day"
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
