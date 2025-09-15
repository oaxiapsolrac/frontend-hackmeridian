import { Button } from '@/components/ui/button'

export default function BrandAdminPage() {
  return (
    <main className="min-h-screen w-full px-4 sm:px-8 py-24 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Brand Admin</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Issue VIP Membership */}
          <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <h2 className="text-xl font-semibold mb-4">Issue VIP Membership</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="vip-wallet" className="block text-sm text-gray-300 mb-1">Wallet Address</label>
                <input
                  id="vip-wallet"
                  type="text"
                  placeholder="0x... | <public key>"
                  className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div>
                <label htmlFor="vip-note" className="block text-sm text-gray-300 mb-1">Note (optional)</label>
                <textarea
                  id="vip-note"
                  rows={3}
                  placeholder="Optional message to include"
                  className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div className="pt-2">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg">Issue Membership</Button>
              </div>
            </form>
          </section>

          {/* Award Achievement Badge */}
          <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <h2 className="text-xl font-semibold mb-4">Award Achievement Badge</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="badge-wallet" className="block text-sm text-gray-300 mb-1">Wallet Address</label>
                <input
                  id="badge-wallet"
                  type="text"
                  placeholder="0x... | <public key>"
                  className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div>
                <label htmlFor="badge-name" className="block text-sm text-gray-300 mb-1">Badge Name</label>
                <input
                  id="badge-name"
                  type="text"
                  placeholder="e.g., Regatta Champion"
                  className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div>
                <label htmlFor="badge-image" className="block text-sm text-gray-300 mb-1">Badge Image URL</label>
                <input
                  id="badge-image"
                  type="url"
                  placeholder="https://..."
                  className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div>
                <label htmlFor="badge-desc" className="block text-sm text-gray-300 mb-1">Description (optional)</label>
                <textarea
                  id="badge-desc"
                  rows={3}
                  placeholder="Short description of the achievement"
                  className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div className="pt-2">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2 rounded-lg">Award Badge</Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  )
}


