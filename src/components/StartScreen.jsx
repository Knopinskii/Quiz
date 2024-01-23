function StartScreen() {
  return (
    <div className="flex flex-col items-center">
      <h2 className=" py-5 text-4xl text-white font-bold">
        Welcome to The React Quiz!
      </h2>
      <h3 className=" py-5 text-white text-2xl">
        15 questions to test your React mastery
      </h3>
      <button className=" text-white bg-gray-600 rounded-full text-xl py-5 px-5">
        Lets start
      </button>
    </div>
  );
}

export default StartScreen;
