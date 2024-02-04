import Aside from "./components/Aside";
import TrackList from "./components/TrackList";
function App() {
  return (
    <main className="min-h-screen font-rubik py-10 flex justify-center text-white bg-very-dark-blue items-center">
      <div className="container justify-center flex-col flex gap-5 md:gap-8 md:h-[550px] md:flex-row flex-wrap md:flex-nowrap">
        <Aside />
        <TrackList />
      </div>
    </main>
  );
}

export default App;
