/**
 * Placeholder shown when a real image hasn't been dropped in yet.
 * Replace the <img> src with a real path once images are available.
 */
interface Props {
  label?: string
  aspectRatio?: string
  className?: string
}

export default function ImagePlaceholder({ label = 'Image', aspectRatio = '3/4', className = '' }: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-white/5 border-2 border-dashed border-white/20 rounded-xl ${className}`}
      style={{ aspectRatio }}
    >
      <svg className="mb-3 opacity-30" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="m21 15-5-5L5 21"/>
      </svg>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
      <p className="text-xs text-gray-600 mt-1">Replace with real image</p>
    </div>
  )
}
