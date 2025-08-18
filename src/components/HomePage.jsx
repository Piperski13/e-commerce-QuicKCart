const HomePage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-6xl font-bold">Make your Outfit wonderful</h1>
      <p className="text-zinc-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere soluta
        iusto expedita veniam asperiores, cumque id, tempora numquam
        voluptatibus.
      </p>
      <div>
        <button className="bg-[#1E5483] border-2 border-indigo p-3 mr-2">
          Start Shoping
        </button>
        <button className="bg-[#102d46] border-2 border-indigo p-3">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default HomePage;
