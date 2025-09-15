import NftCard from '@/components/ui/NftCard'
import BadgeCard from '@/components/ui/BadgeCard'
import { MOCK_MEMBERSHIP_NFT, MOCK_ACHIEVEMENT_BADGES } from '@/lib/mocks'

export default function DashboardPage() {
  return (
    <main className="min-h-screen w-full px-4 sm:px-8 py-24 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">VIP Dashboard</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">My Membership</h2>
          <NftCard asset={MOCK_MEMBERSHIP_NFT} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">My Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MOCK_ACHIEVEMENT_BADGES.map((badge) => (
              <BadgeCard key={badge.id} asset={badge} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}


