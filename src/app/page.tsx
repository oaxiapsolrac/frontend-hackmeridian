export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white w-full">
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Capys Club Homepage</h1>
        </div>
      </div>
    </main>
  )
}
