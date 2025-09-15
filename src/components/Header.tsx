'use client'

import { Button } from './ui/button'
import { useWallet } from '@/lib/WalletProvider'
import ConnectButton from '@/components/ConnectButton'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

export default function Header() {
  const { isConnected, publicKey, connect, disconnect, isLoading } = useWallet()
  const { isAuthenticated, logout } = useAuth()

  const formatAddress = (address: string) => {
    if (address.length <= 12) return address
    return `${address.slice(0, 6)}...${address.slice(-6)}`
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white px-6 py-4 border-b border-white/10">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            Capys Club
          </h1>
        </div>

        {/* Navigation and Auth */}
        {isAuthenticated ? (
          <div className="flex items-center space-x-4">
            <nav className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-sm text-white/90 hover:text-white transition">
                Dashboard
              </Link>
              <Link href="/admin" className="text-sm text-white/90 hover:text-white transition">
                Admin
              </Link>
            </nav>
            <Button 
              onClick={logout} 
              variant="outline" 
              className="text-sm border-white/20 text-white hover:bg-white/10"
            >
              Logout
            </Button>
          </div>
        ) : null}
        </div>
      </div>
    </header>
  )
}
