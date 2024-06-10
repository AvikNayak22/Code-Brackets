import "../bg.css";
const Home = () => {
  return (
    <div className="w-full h-[calc(100vh-60px)] text-white flex justify-center items-center flex-col gap-6 bg-wallpaper">
      <h1 className=" text-4xl md:text-6xl font-extrabold text-center drop-shadow-lg">
        Code Brackets
      </h1>
      <p className="text-gray-300  text-lg md:text-2xl text-center text-pretty">
        Sit down, relax and write some code! This code editor is your comfort
        zone.
      </p>
    </div>
  );
};

export default Home;
