export default function Home() {
  return (
    <main className="relative min-h-screen text-white w-full">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1625493129158-26bf61d0b09a?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 z-10 bg-black/70" />
      <div className="relative z-20 flex flex-col items-center justify-center h-screen w-full text-center p-4 sm:p-8">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">The Future of Luxury Communities</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl">
          Capys Club is an exclusive community for the world's most discerning capybara enthusiasts. Join us to access premium experiences, unique events, and a network of like-minded individuals.
        </p>
        <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-8 rounded-full text-xl transition-all transform hover:scale-105">
          Get Started
        </button>
      </div>
    </main>
  )
}
