import { 
  Server, 
  Keypair, 
  TransactionBuilder, 
  Operation, 
  Asset, 
  Networks,
  BASE_FEE,
  Memo,
  MemoType
} from 'stellar-sdk'
import { 
  Contract, 
  Address, 
  nativeToScVal, 
  scValToNative,
  xdr
} from 'soroban-client'
import { FreighterApi } from '@stellar/freighter-api'
import { getSorobanConfig } from './soroban-config'

// Obter configurações do Soroban
const config = getSorobanConfig()

// Interfaces
export interface TransactionStatus {
  status: 'pending' | 'success' | 'error'
  message: string
  transactionHash?: string
  error?: string
}

export interface MembershipData {
  targetAddress: string
  membershipId: string
  tier: string
  metadata: string
}

/**
 * Constrói uma transação para emitir um novo membership
 * @param targetAddress - Endereço da carteira que receberá o membership
 * @param membershipId - ID único do membership
 * @returns Promise<TransactionBuilder> - Transação construída
 */
export async function issueMembershipTransaction(
  targetAddress: string,
  membershipId: string = `MEMBERSHIP_${Date.now()}`
): Promise<TransactionBuilder> {
  try {
    // Configurar servidor
    const server = new Server(config.rpcUrl)
    
    // Obter conta do admin (quem está emitindo)
    const adminAccount = await server.getAccount(targetAddress) // Em produção, usar conta do admin
    
    // Criar contrato
    const contract = new Contract(config.contracts.membership)
    
    // Construir transação
    const transaction = new TransactionBuilder(adminAccount, {
      fee: config.baseFee,
      networkPassphrase: config.networkPassphrase,
    })
      .addOperation(
        Operation.invokeHostFunction({
          func: contract.call('issue_membership', 
            nativeToScVal(targetAddress, { type: 'address' }),
            nativeToScVal(membershipId, { type: 'string' }),
            nativeToScVal('VIP', { type: 'string' }), // Tier
            nativeToScVal(JSON.stringify({
              name: `Capys Club Membership #${membershipId.slice(-4)}`,
              description: 'Exclusive membership NFT for Capys Club',
              image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${targetAddress}`,
              attributes: [
                { trait_type: 'Tier', value: 'VIP' },
                { trait_type: 'Rarity', value: 'Legendary' },
                { trait_type: 'Issued At', value: new Date().toISOString() }
              ]
            }), { type: 'string' })
          ),
          auth: []
        })
      )
      .setTimeout(30)
      .build()

    return transaction
  } catch (error) {
    console.error('Erro ao construir transação de membership:', error)
    throw new Error('Falha ao construir transação de membership')
  }
}

/**
 * Constrói uma transação para emitir um badge
 * @param targetAddress - Endereço da carteira que receberá o badge
 * @param badgeId - ID do badge
 * @param badgeName - Nome do badge
 * @param badgeDescription - Descrição do badge
 * @returns Promise<TransactionBuilder> - Transação construída
 */
export async function issueBadgeTransaction(
  targetAddress: string,
  badgeId: string,
  badgeName: string,
  badgeDescription: string
): Promise<TransactionBuilder> {
  try {
    // Configurar servidor
    const server = new Server(config.rpcUrl)
    
    // Obter conta do admin
    const adminAccount = await server.getAccount(targetAddress) // Em produção, usar conta do admin
    
    // Criar contrato
    const contract = new Contract(config.contracts.membership)
    
    // Construir transação
    const transaction = new TransactionBuilder(adminAccount, {
      fee: config.baseFee,
      networkPassphrase: config.networkPassphrase,
    })
      .addOperation(
        Operation.invokeHostFunction({
          func: contract.call('issue_badge',
            nativeToScVal(targetAddress, { type: 'address' }),
            nativeToScVal(badgeId, { type: 'string' }),
            nativeToScVal(badgeName, { type: 'string' }),
            nativeToScVal(badgeDescription, { type: 'string' }),
            nativeToScVal(JSON.stringify({
              name: badgeName,
              description: badgeDescription,
              image: `https://api.dicebear.com/7.x/shapes/svg?seed=${badgeId}`,
              rarity: 'Rare',
              category: 'Achievement'
            }), { type: 'string' })
          ),
          auth: []
        })
      )
      .setTimeout(30)
      .build()

    return transaction
  } catch (error) {
    console.error('Erro ao construir transação de badge:', error)
    throw new Error('Falha ao construir transação de badge')
  }
}

/**
 * Constrói uma transação para conceder (award) um badge existente
 * @param targetAddress - Endereço da carteira que receberá o badge
 * @param badgeId - ID do badge a ser concedido
 * @returns Promise<TransactionBuilder> - Transação construída
 */
export async function awardBadgeTransaction(
  targetAddress: string,
  badgeId: string
): Promise<TransactionBuilder> {
  try {
    // Configurar servidor
    const server = new Server(config.rpcUrl)

    // Obter conta do admin
    const adminAccount = await server.getAccount(targetAddress) // Em produção, usar conta do admin

    // Criar contrato
    const contract = new Contract(config.contracts.membership)

    // Construir transação
    const transaction = new TransactionBuilder(adminAccount, {
      fee: config.baseFee,
      networkPassphrase: config.networkPassphrase,
    })
      .addOperation(
        Operation.invokeHostFunction({
          func: contract.call(
            'award_badge',
            nativeToScVal(targetAddress, { type: 'address' }),
            nativeToScVal(badgeId, { type: 'string' })
          ),
          auth: []
        })
      )
      .setTimeout(30)
      .build()

    return transaction
  } catch (error) {
    console.error('Erro ao construir transação de award badge:', error)
    throw new Error('Falha ao construir transação de award badge')
  }
}

/**
 * Assina e envia uma transação usando a Freighter
 * @param transaction - Transação a ser assinada
 * @param userAddress - Endereço do usuário que assinará
 * @returns Promise<TransactionStatus> - Status da transação
 */
export async function signAndSubmitTransaction(
  transaction: TransactionBuilder,
  userAddress: string
): Promise<TransactionStatus> {
  try {
    // Verificar se Freighter está disponível
    if (typeof window === 'undefined' || !window.freighterApi) {
      throw new Error('Freighter wallet não está disponível')
    }

    const freighterApi = new FreighterApi()
    
    // Verificar se está conectado
    const isConnected = await freighterApi.isConnected()
    if (!isConnected) {
      throw new Error('Carteira não está conectada')
    }

    // Verificar se o endereço corresponde
    const publicKey = await freighterApi.getPublicKey()
    if (publicKey !== userAddress) {
      throw new Error('Endereço da carteira não corresponde ao esperado')
    }

    // Assinar transação
    const signedTransaction = await freighterApi.signTransaction(
      transaction.toXDR(),
      config.networkPassphrase
    )

    // Enviar transação
    const server = new Server(config.rpcUrl)
    const result = await server.submitTransaction(signedTransaction)

    if (result.successful) {
      return {
        status: 'success',
        message: 'Transação enviada com sucesso!',
        transactionHash: result.hash
      }
    } else {
      return {
        status: 'error',
        message: 'Transação falhou',
        error: result.resultXdr
      }
    }
  } catch (error) {
    console.error('Erro ao assinar/enviar transação:', error)
    return {
      status: 'error',
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    }
  }
}

/**
 * Emite um membership completo (constrói, assina e envia)
 * @param targetAddress - Endereço que receberá o membership
 * @param adminAddress - Endereço do admin que está emitindo
 * @returns Promise<TransactionStatus> - Status da operação
 */
export async function issueMembership(
  targetAddress: string,
  adminAddress: string
): Promise<TransactionStatus> {
  try {
    // Construir transação
    const transaction = await issueMembershipTransaction(targetAddress)
    
    // Assinar e enviar
    const result = await signAndSubmitTransaction(transaction, adminAddress)
    
    return result
  } catch (error) {
    console.error('Erro ao emitir membership:', error)
    return {
      status: 'error',
      message: error instanceof Error ? error.message : 'Erro ao emitir membership',
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    }
  }
}

/**
 * Emite um badge completo (constrói, assina e envia)
 * @param targetAddress - Endereço que receberá o badge
 * @param badgeId - ID do badge
 * @param badgeName - Nome do badge
 * @param badgeDescription - Descrição do badge
 * @param adminAddress - Endereço do admin que está emitindo
 * @returns Promise<TransactionStatus> - Status da operação
 */
export async function issueBadge(
  targetAddress: string,
  badgeId: string,
  badgeName: string,
  badgeDescription: string,
  adminAddress: string
): Promise<TransactionStatus> {
  try {
    // Construir transação
    const transaction = await issueBadgeTransaction(
      targetAddress,
      badgeId,
      badgeName,
      badgeDescription
    )
    
    // Assinar e enviar
    const result = await signAndSubmitTransaction(transaction, adminAddress)
    
    return result
  } catch (error) {
    console.error('Erro ao emitir badge:', error)
    return {
      status: 'error',
      message: error instanceof Error ? error.message : 'Erro ao emitir badge',
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    }
  }
}

/**
 * Concede (award) um badge existente (constrói, assina e envia)
 * @param targetAddress - Endereço que receberá o badge
 * @param badgeId - ID do badge
 * @param adminAddress - Endereço do admin que está concedendo o badge
 * @returns Promise<TransactionStatus> - Status da operação
 */
export async function awardBadge(
  targetAddress: string,
  badgeId: string,
  adminAddress: string
): Promise<TransactionStatus> {
  try {
    // Construir transação
    const transaction = await awardBadgeTransaction(targetAddress, badgeId)

    // Assinar e enviar
    const result = await signAndSubmitTransaction(transaction, adminAddress)

    return result
  } catch (error) {
    console.error('Erro ao conceder badge:', error)
    return {
      status: 'error',
      message: error instanceof Error ? error.message : 'Erro ao conceder badge',
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    }
  }
}
