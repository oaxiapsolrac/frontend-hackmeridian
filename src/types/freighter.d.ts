declare global {
  interface Window {
    freighterApi: {
      isConnected: () => Promise<boolean>
      getPublicKey: () => Promise<string>
      connect: () => Promise<string>
      disconnect: () => Promise<void>
    }
  }
}

export {}
