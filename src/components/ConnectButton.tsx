'use client'

import { Button } from './ui/button'
import { useWallet } from '@/lib/WalletProvider'

type ConnectButtonProps = {
  className?: string
}

export default function ConnectButton({ className }: ConnectButtonProps) {
  const { isConnected, connect, disconnect, isLoading } = useWallet()

  if (isConnected) {
    return (
      <Button
        onClick={disconnect}
        className={`bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 ${className ?? ''}`}
      >
        Disconnect
      </Button>
    )
  }

  return (
    <Button
      onClick={connect}
      disabled={isLoading}
      className={`bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 ${className ?? ''}`}
    >
      {isLoading ? 'Connecting...' : 'Connect Wallet'}
    </Button>
  )
}


