import type { NftAsset } from '@/types/data'

type BadgeCardProps = {
  asset: NftAsset
  className?: string
}

export default function BadgeCard({ asset, className }: BadgeCardProps) {
  return (
    <div className={`rounded-lg overflow-hidden bg-white/5 backdrop-blur border border-white/10 shadow ${className ?? ''}`}>
      <div className="flex items-center space-x-3 p-3">
        <img
          src={asset.imageUrl}
          alt={asset.name}
          className="w-12 h-12 object-cover rounded"
        />
        <div>
          <div className="text-sm font-medium text-white">{asset.name}</div>
          {asset.description ? (
            <div className="text-xs text-gray-300">{asset.description}</div>
          ) : null}
        </div>
      </div>
    </div>
  )
}


