'use client'

import { useState, useEffect } from 'react'
import { useWallet } from '@/lib/WalletProvider'
import { checkMembership } from '@/lib/stellar'

export default function Dashboard() {
  const { isConnected, publicKey } = useWallet()
  const [hasMembership, setHasMembership] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const verifyMembership = async () => {
      if (!isConnected || !publicKey) {
        setHasMembership(false)
        return
      }

      setIsLoading(true)
      try {
        const membershipStatus = await checkMembership(publicKey)
        setHasMembership(membershipStatus)
      } catch (error) {
        console.error('Erro ao verificar membership:', error)
        setHasMembership(false)
      } finally {
        setIsLoading(false)
      }
    }

    verifyMembership()
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
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">Verifying membership...</p>
        </div>
      </div>
    )
  }

  // Se não possui membership
  if (hasMembership === false) {
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
          
          {/* NFT Placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-96 border-2 border-green-500 rounded-lg bg-gray-800 flex items-center justify-center">
              <div className="text-center text-green-400">
                <div className="text-6xl mb-4">🖼️</div>
                <p className="text-lg font-semibold">Membership NFT</p>
                <p className="text-sm">Verified</p>
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
