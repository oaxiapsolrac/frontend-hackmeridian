'use client'

import { useState, useEffect } from 'react'
import { useWallet } from '@/lib/WalletProvider'
import { getUserProfile, NFTMetadata, BadgeMetadata } from '@/lib/stellar'
import LoadingSpinner from '@/components/LoadingSpinner'

interface UserProfile {
  hasMembership: boolean
  membershipNFT: NFTMetadata | null
  badges: BadgeMetadata[]
  totalBadges: number
}

export default function Dashboard() {
  const { isConnected, publicKey } = useWallet()
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const loadUserProfile = async () => {
      if (!isConnected || !publicKey) {
        setUserProfile(null)
        return
      }

      setIsLoading(true)
      try {
        const profile = await getUserProfile(publicKey)
        setUserProfile(profile)
      } catch (error) {
        console.error('Erro ao carregar perfil do usuário:', error)
        setUserProfile(null)
      } finally {
        setIsLoading(false)
      }
    }

    loadUserProfile()
  }, [isConnected, publicKey])

  // Se não estiver conectado
  if (!isConnected) {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-400 mb-4">Access Denied</h1>
          <p className="text-xl text-gray-300">Please connect your wallet to access the dashboard</p>
        </div>
      </div>
    )
  }

  // Se estiver carregando
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-8 flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading your profile..." />
      </div>
    )
  }

  // Se não possui membership
  if (userProfile && !userProfile.hasMembership) {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-400 mb-4">Access Denied</h1>
          <p className="text-xl text-gray-300 mb-6">You need a Capys Club membership NFT to access this dashboard</p>
          <div className="bg-gray-800 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-sm text-gray-400">
              Your wallet: <span className="text-blue-400 font-mono">{publicKey?.slice(0, 8)}...{publicKey?.slice(-8)}</span>
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Se possui membership - mostrar dashboard completo
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* My Membership Card Section */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-white">
            My Membership Card
          </h1>
          
          {/* NFT Card */}
          {userProfile?.membershipNFT ? (
            <div className="flex justify-center">
              <div className="w-80 bg-gray-800 rounded-xl overflow-hidden shadow-2xl border-2 border-green-500">
                {/* NFT Image */}
                <div className="h-64 bg-gray-700 flex items-center justify-center">
                  <img 
                    src={userProfile.membershipNFT.image} 
                    alt={userProfile.membershipNFT.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${publicKey}&backgroundColor=1f2937&textColor=ffffff`
                    }}
                  />
                </div>
                
                {/* NFT Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {userProfile.membershipNFT.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {userProfile.membershipNFT.description}
                  </p>
                  
                  {/* Attributes */}
                  <div className="space-y-2">
                    {userProfile.membershipNFT.attributes.map((attr, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-400">{attr.trait_type}:</span>
                        <span className="text-white font-semibold">{attr.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-64 h-96 border-2 border-gray-600 rounded-lg bg-gray-800 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">🖼️</div>
                  <p className="text-lg">Loading NFT...</p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* My Achievements Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">
              My Achievements
            </h2>
            <div className="text-sm text-gray-400">
              {userProfile?.totalBadges || 0} badges earned
            </div>
          </div>
          
          {/* Achievements Grid */}
          {userProfile?.badges && userProfile.badges.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {userProfile.badges.map((badge, index) => (
                <div 
                  key={index}
                  className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {/* Badge Image */}
                  <div className="h-32 bg-gray-700 flex items-center justify-center">
                    <img 
                      src={badge.image} 
                      alt={badge.name}
                      className="w-20 h-20 object-cover rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `https://api.dicebear.com/7.x/shapes/svg?seed=${badge.name}&backgroundColor=1f2937&textColor=ffffff`
                      }}
                    />
                  </div>
                  
                  {/* Badge Info */}
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-white mb-1 truncate">
                      {badge.name}
                    </h3>
                    <p className="text-xs text-gray-400 mb-2 line-clamp-2">
                      {badge.description}
                    </p>
                    
                    {/* Rarity Badge */}
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        badge.rarity === 'Common' ? 'bg-gray-600 text-gray-200' :
                        badge.rarity === 'Rare' ? 'bg-blue-600 text-blue-200' :
                        badge.rarity === 'Epic' ? 'bg-purple-600 text-purple-200' :
                        'bg-yellow-600 text-yellow-200'
                      }`}>
                        {badge.rarity}
                      </span>
                      <span className="text-xs text-gray-500">
                        {badge.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No Achievements Yet</h3>
              <p className="text-gray-500">Complete tasks and activities to earn your first badge!</p>
            </div>
          )}
        </section>

      </div>
    </div>
  )
}
