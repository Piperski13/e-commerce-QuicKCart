import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">
        About{" "}
        <span className="bg-gradient-to-r from-purple-400 to-purple-800 bg-clip-text text-transparent">
          QuicKCart.
        </span>
      </h1>
      <p className="text-lg text-zinc-400 mb-8">
        At <span className="font-semibold">QuicKCart</span>, shopping is made
        simple, fast, and hassle-free. Our goal is to bring you a seamless
        online shopping experience where you can find everything you need— from
        everyday essentials to trending products—delivered right to your door.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="p-6 rounded-2xl shadow bg-gradient-to-tr from-purple-800 to-indigo-900 text-white">
          <h2 className="text-xl font-semibold mb-2">🚀 Fast & Easy</h2>
          <p className="text-zinc-300">
            Designed for quick browsing and effortless checkout so you spend
            less time shopping and more time enjoying.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow bg-gradient-to-tr from-purple-800 to-indigo-900 text-white">
          <h2 className="text-xl font-semibold mb-2">✨ Curated Products</h2>
          <p className="text-zinc-300">
            We hand-pick our catalog to offer great value, high quality, and the
            latest trends in one place.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow bg-gradient-to-tr from-purple-800 to-indigo-900 text-white">
          <h2 className="text-xl font-semibold mb-2">💳 Secure Shopping</h2>
          <p className="text-zinc-300">
            Safe payments, reliable service, and customer-first support—so you
            can shop with confidence.
          </p>
        </div>
      </div>

      <p className="mt-12 text-zinc-500">
        Whether you’re discovering something new or grabbing your daily
        essentials,
        <span className="font-semibold"> QuicKCart </span> is here to make
        shopping effortless. Let’s make every purchase a quick one!
      </p>
    </main>
  );
};

export default AboutPage;
