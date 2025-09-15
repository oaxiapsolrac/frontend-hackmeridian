'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { FreighterApi } from '@stellar/freighter-api'

interface WalletContextType {
  isConnected: boolean
  publicKey: string | null
  connect: () => Promise<void>
  disconnect: () => void
  isLoading: boolean
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

interface WalletProviderProps {
  children: ReactNode
}

export function WalletProvider({ children }: WalletProviderProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [publicKey, setPublicKey] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Verificar se a carteira está disponível
  const isFreighterAvailable = () => {
    return typeof window !== 'undefined' && window.freighterApi
  }

  // Conectar à carteira
  const connect = async () => {
    if (!isFreighterAvailable()) {
      alert('Freighter wallet não está disponível. Por favor, instale a extensão.')
      return
    }

    setIsLoading(true)
    try {
      const freighterApi = new FreighterApi()
      
      // Verificar se já está conectado
      const isConnected = await freighterApi.isConnected()
      if (isConnected) {
        const publicKey = await freighterApi.getPublicKey()
        setPublicKey(publicKey)
        setIsConnected(true)
        return
      }

      // Solicitar conexão
      const publicKey = await freighterApi.connect()
      setPublicKey(publicKey)
      setIsConnected(true)
    } catch (error) {
      console.error('Erro ao conectar à carteira:', error)
      alert('Erro ao conectar à carteira. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  // Desconectar da carteira
  const disconnect = () => {
    setPublicKey(null)
    setIsConnected(false)
  }

  // Verificar conexão existente ao carregar a página
  useEffect(() => {
    const checkConnection = async () => {
      if (!isFreighterAvailable()) return

      try {
        const freighterApi = new FreighterApi()
        const isConnected = await freighterApi.isConnected()
        if (isConnected) {
          const publicKey = await freighterApi.getPublicKey()
          setPublicKey(publicKey)
          setIsConnected(true)
        }
      } catch (error) {
        console.error('Erro ao verificar conexão:', error)
      }
    }

    checkConnection()
  }, [])

  const value: WalletContextType = {
    isConnected,
    publicKey,
    connect,
    disconnect,
    isLoading
  }

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  )
}

// Hook para usar o contexto da carteira
export function useWallet() {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error('useWallet deve ser usado dentro de um WalletProvider')
  }
  return context
}

