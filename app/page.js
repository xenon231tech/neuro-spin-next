export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050816] text-white relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>

      <div className="relative z-10 text-center px-6">

        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          NEURO SPIN
        </h1>

        <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
          Cyberpunk NFT Spin Platform for Farcaster Mini Apps
        </p>

        <button className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 transition-all duration-300 font-semibold text-lg shadow-[0_0_40px_rgba(168,85,247,0.5)]">
          PLAY NOW
        </button>

      </div>

    </main>
  );
}
