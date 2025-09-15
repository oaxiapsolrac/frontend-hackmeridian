import type { NftAsset } from '@/types/data'

type NftCardProps = {
  asset: NftAsset
  className?: string
}

export default function NftCard({ asset, className }: NftCardProps) {
  return (
    <div className={`group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-md hover:shadow-xl hover:border-white/20 transition-all duration-300 ${className ?? ''}`}>
      <div className="relative">
        <img
          src={asset.imageUrl}
          alt={asset.name}
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white tracking-tight">{asset.name}</h3>
        {asset.description ? (
          <p className="mt-2 text-sm text-gray-300 leading-relaxed">{asset.description}</p>
        ) : null}
      </div>
    </div>
  )
}


