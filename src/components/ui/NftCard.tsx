import type { NftAsset } from '@/types/data'

type NftCardProps = {
  asset: NftAsset
  className?: string
}

export default function NftCard({ asset, className }: NftCardProps) {
  return (
    <div className={`rounded-xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 shadow-md ${className ?? ''}`}>
      <img
        src={asset.imageUrl}
        alt={asset.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{asset.name}</h3>
        {asset.description ? (
          <p className="mt-2 text-sm text-gray-300">{asset.description}</p>
        ) : null}
      </div>
    </div>
  )
}


