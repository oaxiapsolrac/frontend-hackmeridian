// Configurações da rede Stellar
export const STELLAR_CONFIG = {
  // Rede (testnet para desenvolvimento, mainnet para produção)
  NETWORK: 'testnet',
  
  // URL do servidor Horizon
  HORIZON_URL: 'https://horizon-testnet.stellar.org',
  
  // Configurações do ativo de membership NFT
  MEMBERSHIP_ASSET: {
    CODE: 'CAPYS',
    ISSUER: 'GDUKMGUGDZQK6YHYA5Z6AY2G4XDSZPSZ3SW5UN3ARVMO6Q4D46B4MBFS' // Exemplo de issuer
  },
  
  // Configurações dos badges
  BADGES: {
    ACHIEVEMENT_1: 'BADGE1',
    ACHIEVEMENT_2: 'BADGE2', 
    ACHIEVEMENT_3: 'BADGE3'
  }
}

// Em produção, estas configurações devem vir de variáveis de ambiente
export const getStellarConfig = () => {
  return {
    network: process.env.NEXT_PUBLIC_STELLAR_NETWORK || STELLAR_CONFIG.NETWORK,
    horizonUrl: process.env.NEXT_PUBLIC_HORIZON_URL || STELLAR_CONFIG.HORIZON_URL,
    membershipAsset: {
      code: process.env.NEXT_PUBLIC_MEMBERSHIP_ASSET_CODE || STELLAR_CONFIG.MEMBERSHIP_ASSET.CODE,
      issuer: process.env.NEXT_PUBLIC_MEMBERSHIP_ASSET_ISSUER || STELLAR_CONFIG.MEMBERSHIP_ASSET.ISSUER
    }
  }
}
