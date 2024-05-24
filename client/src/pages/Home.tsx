import "../bg.css";
const Home = () => {
  return (
    <div className="w-full h-[calc(100vh-60px)] text-white flex justify-center items-center flex-col gap-3 bg-wallpaper">
      <h1 className="text-6xl font-bold text-center">Code Brackets</h1>
      <p className="text-gray-400 text-2xl text-center text-pretty">
        Code Brackets is an online editor made for people who like simplicity.
      </p>
    </div>
  );
};

export default Home;
