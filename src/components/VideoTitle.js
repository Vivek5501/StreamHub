const VideoTitle = ({ title, overview,movieId}) => {
  // console.log(title, overview);
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black">
      <h1 className=" text-4xl font-bold text-white">{title}</h1>
      <p className="py-6 w-1/4 text-lg text-white">{overview}</p>

      <div>
        <button className="bg-white text-black p-4 px-14  rounded-lg  font-bold hover:opacity-80">▶️Play</button>
        <button className=" text-white mx-2 p-4 px-10 bg-gray-500 rounded-lg opacity-55  font-bold">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
