'use client'

import { Button } from './ui/button'
import { useWallet } from '@/lib/WalletProvider'
import ConnectButton from '@/components/ConnectButton'

export default function Header() {
  const { isConnected, publicKey, connect, disconnect, isLoading } = useWallet()

  const formatAddress = (address: string) => {
    if (address.length <= 12) return address
    return `${address.slice(0, 6)}...${address.slice(-6)}`
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            Capys Club
          </h1>
        </div>

        {/* Wallet Connection */}
        <div className="flex items-center space-x-4">
          {isConnected && publicKey ? (
            <div className="flex items-center space-x-3">
              <div className="text-sm text-gray-300">
                <span className="text-green-400">●</span> {formatAddress(publicKey)}
              </div>
              <ConnectButton className="px-4 py-2" />
            </div>
          ) : (
            <ConnectButton />
          )}
        </div>
      </div>
    </header>
  )
}
