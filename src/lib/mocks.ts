import type { NftAsset } from '@/types/data'

export const MOCK_MEMBERSHIP_NFT: NftAsset = {
  id: 'membership-001',
  name: 'Capys Club Membership',
  imageUrl: 'https://via.placeholder.com/600x600?text=Membership+NFT',
  description: 'Exclusive membership token for Capys Club.',
}

export const MOCK_ACHIEVEMENT_BADGES: NftAsset[] = [
  {
    id: 'badge-helm-001',
    name: 'Master Helmsman',
    imageUrl: 'https://via.placeholder.com/400x400?text=Badge+1',
    description: 'Awarded for expert navigation skills.',
  },
  {
    id: 'badge-regatta-001',
    name: 'Regatta Champion',
    imageUrl: 'https://via.placeholder.com/400x400?text=Badge+2',
    description: 'Winner of the annual regatta.',
  },
  {
    id: 'badge-steward-001',
    name: 'Ocean Steward',
    imageUrl: 'https://via.placeholder.com/400x400?text=Badge+3',
    description: 'Recognized for contributions to ocean conservation.',
  },
]


