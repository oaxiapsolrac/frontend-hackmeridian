export interface NftAsset {
  id: string
  name: string
  imageUrl: string
  description?: string
}

export interface UserProfile {
  walletAddress: string
  assets: NftAsset[]
}


