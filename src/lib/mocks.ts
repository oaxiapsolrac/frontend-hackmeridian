import type { NftAsset } from '@/types/data'

export const MOCK_MEMBERSHIP_NFT: NftAsset = {
  id: 'membership-001',
  name: 'Cartão de Membro VIP',
  imageUrl: 'https://via.placeholder.com/300x400?text=VIP+Member+Card',
  description: 'Acesso exclusivo ao clube VIP.',
}

export const MOCK_ACHIEVEMENT_BADGES: NftAsset[] = [
  {
    id: 'badge-vip-001',
    name: 'Early Voyager',
    imageUrl: 'https://via.placeholder.com/150?text=Badge+1',
    description: 'Conquistado ao ingressar entre os primeiros membros.',
  },
  {
    id: 'badge-vip-002',
    name: 'Regatta Champion',
    imageUrl: 'https://via.placeholder.com/150?text=Badge+2',
    description: 'Vencedor da regata anual.',
  },
  {
    id: 'badge-vip-003',
    name: 'Ocean Steward',
    imageUrl: 'https://via.placeholder.com/150?text=Badge+3',
    description: 'Reconhecimento por ações de preservação dos oceanos.',
  },
]


