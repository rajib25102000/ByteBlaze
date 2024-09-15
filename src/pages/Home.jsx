import Hero from "../components/Hero";
import wave from '../assets/1523.jpg'

const Home = () => {
  return (
    <div className="flex flex-col relative items-center justify-center min-h-[calc(100vh-132px)]">
      <Hero></Hero>
      <img src={wave} className="h-40 w-full absolute bottom-0" alt="" />
    </div>
  );
};

export default Home;
