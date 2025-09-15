import { Server, Asset, Keypair } from 'stellar-sdk'
import { getStellarConfig } from './stellar-config'

// Obter configurações do Stellar
const config = getStellarConfig()

/**
 * Verifica se o usuário possui o NFT de membership
 * @param userAddress - Endereço público da carteira do usuário
 * @returns Promise<boolean> - true se possui membership, false caso contrário
 */
export async function checkMembership(userAddress: string): Promise<boolean> {
  try {
    // Validar endereço
    if (!userAddress || typeof userAddress !== 'string') {
      console.error('Endereço de usuário inválido')
      return false
    }

    // Configurar servidor Stellar
    const server = new Server(config.horizonUrl)
    
    // Criar objeto do ativo de membership
    const membershipAsset = new Asset(config.membershipAsset.code, config.membershipAsset.issuer)
    
    // Buscar conta do usuário
    const account = await server.loadAccount(userAddress)
    
    // Verificar se a conta possui o ativo de membership
    const balance = account.balances.find(balance => {
      if (balance.asset_type === 'native') return false
      
      const asset = new Asset(balance.asset_code!, balance.asset_issuer!)
      return asset.equals(membershipAsset)
    })
    
    // Retornar true se encontrar o ativo com saldo > 0
    if (balance && parseFloat(balance.balance) > 0) {
      console.log(`Usuário ${userAddress} possui membership NFT`)
      return true
    }
    
    console.log(`Usuário ${userAddress} não possui membership NFT`)
    return false
    
  } catch (error) {
    console.error('Erro ao verificar membership:', error)
    
    // Em caso de erro, retornar false por segurança
    return false
  }
}

/**
 * Verifica se o usuário possui um badge específico
 * @param userAddress - Endereço público da carteira do usuário
 * @param badgeId - ID do badge a ser verificado
 * @returns Promise<boolean> - true se possui o badge, false caso contrário
 */
export async function checkBadge(userAddress: string, badgeId: string): Promise<boolean> {
  try {
    // Validar parâmetros
    if (!userAddress || !badgeId) {
      console.error('Parâmetros inválidos para verificação de badge')
      return false
    }

    // Configurar servidor Stellar
    const server = new Server(config.horizonUrl)
    
    // Criar objeto do ativo do badge
    const badgeAsset = new Asset(badgeId, config.membershipAsset.issuer)
    
    // Buscar conta do usuário
    const account = await server.loadAccount(userAddress)
    
    // Verificar se a conta possui o ativo do badge
    const balance = account.balances.find(balance => {
      if (balance.asset_type === 'native') return false
      
      const asset = new Asset(balance.asset_code!, balance.asset_issuer!)
      return asset.equals(badgeAsset)
    })
    
    // Retornar true se encontrar o ativo com saldo > 0
    if (balance && parseFloat(balance.balance) > 0) {
      console.log(`Usuário ${userAddress} possui badge ${badgeId}`)
      return true
    }
    
    console.log(`Usuário ${userAddress} não possui badge ${badgeId}`)
    return false
    
  } catch (error) {
    console.error('Erro ao verificar badge:', error)
    return false
  }
}

/**
 * Obtém informações da conta do usuário
 * @param userAddress - Endereço público da carteira do usuário
 * @returns Promise<object> - Informações da conta
 */
export async function getAccountInfo(userAddress: string) {
  try {
    const server = new Server(config.horizonUrl)
    const account = await server.loadAccount(userAddress)
    
    return {
      accountId: account.accountId(),
      balances: account.balances,
      sequence: account.sequenceNumber(),
      subentryCount: account.subentryCount()
    }
  } catch (error) {
    console.error('Erro ao obter informações da conta:', error)
    throw error
  }
}
