import workIcon from "../../images/icon-work.svg";
import playIcon from "../../images/icon-play.svg";
import socialIcon from "../../images/icon-social.svg";
import studyIcon from "../../images/icon-study.svg";
import exerciseIcon from "../../images/icon-exercise.svg";
import careIcon from "../../images/icon-self-care.svg";

export default function TrackCard({ type, title, current, previous }) {
  const icons = {
    Work: workIcon,
    Play: playIcon,
    Study: studyIcon,
    Social: socialIcon,
    Exercise: exerciseIcon,
    "Self Care": careIcon,
  };
  const icon = icons[title];
  return (
    <div className="relative">
      <div
        style={{
          backgroundColor:
            title.toLowerCase() === "work"
              ? "hsl(15, 100%, 70%)"
              : title.toLowerCase() === "play"
              ? "hsl(195, 74%, 62%)"
              : title.toLowerCase() === "study"
              ? "hsl(348, 100%, 68%)"
              : title.toLowerCase() === "social"
              ? "hsl(264, 64%, 52%)"
              : title.toLowerCase() === "exercise"
              ? "hsl(145, 58%, 55%)"
              : title.toLowerCase() === "self care"
              ? "hsl(43, 84%, 65%)"
              : "",
        }}
        className="rounded-2xl px-4 h-full pb-[80px] overflow-hidden"
      >
        <img src={icon} alt="icon" className="ms-auto" />
      </div>
      <div className="bg-dark-blue absolute transition-all cursor-pointer hover:bg-desaturated-blue w-full  h-[83%] bottom-0 left-0 z-40 py-5 px-4 lg:py-10 lg:px-7 rounded-xl">
        <h3 className="flex justify-between font-medium text-lg  lg:mb-8">
          {title}
          <span className="text-pale-blue  hover:text-white transition-colors cursor-pointer">
            ...
          </span>
        </h3>
        <div className="flex justify-between md:flex-col md:block items-center mt-3">
          <h1 className="text-3xl md:text-4xl lg:text-6xl mb-2 font-light">
            {current}hrs
          </h1>
          <p className="text-pale-blue">
            Last {type} - {previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}
