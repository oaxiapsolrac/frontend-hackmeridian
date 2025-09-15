import type { NftAsset } from '@/types/data'

type BadgeCardProps = {
  asset: NftAsset
  className?: string
}

export default function BadgeCard({ asset, className }: BadgeCardProps) {
  return (
    <div className={`group rounded-xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow hover:shadow-lg hover:border-white/20 transition-all duration-300 ${className ?? ''}`}>
      <div className="flex items-center space-x-3 p-3">
        <img
          src={asset.imageUrl}
          alt={asset.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div>
          <div className="text-sm font-semibold text-white tracking-tight">{asset.name}</div>
          {asset.description ? (
            <div className="text-xs text-gray-300 leading-snug">{asset.description}</div>
          ) : null}
        </div>
      </div>
    </div>
  )
}


