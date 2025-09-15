export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* My Membership Card Section */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-white">
            My Membership Card
          </h1>
          
          {/* NFT Placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-96 border-2 border-gray-600 rounded-lg bg-gray-800 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-4">🖼️</div>
                <p className="text-lg">NFT Image</p>
                <p className="text-sm">Placeholder</p>
              </div>
            </div>
          </div>
        </section>

        {/* My Achievements Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-white">
            My Achievements
          </h2>
          
          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Badge 1 */}
            <div className="w-40 h-40 border-2 border-yellow-500 rounded-lg bg-gray-800 flex items-center justify-center mx-auto">
              <div className="text-center text-yellow-400">
                <div className="text-4xl mb-2">🏆</div>
                <p className="text-sm font-semibold">Achievement 1</p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="w-40 h-40 border-2 border-blue-500 rounded-lg bg-gray-800 flex items-center justify-center mx-auto">
              <div className="text-center text-blue-400">
                <div className="text-4xl mb-2">⭐</div>
                <p className="text-sm font-semibold">Achievement 2</p>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="w-40 h-40 border-2 border-green-500 rounded-lg bg-gray-800 flex items-center justify-center mx-auto">
              <div className="text-center text-green-400">
                <div className="text-4xl mb-2">🎯</div>
                <p className="text-sm font-semibold">Achievement 3</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
