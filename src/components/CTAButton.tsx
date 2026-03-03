interface Props {
  href: string
  label: string
  hex: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function CTAButton({ href, label, hex, size = 'md', className = '' }: Props) {
  const padding = size === 'lg' ? 'px-10 py-5 text-lg' : size === 'sm' ? 'px-5 py-2.5 text-sm' : 'px-8 py-4 text-base'
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`inline-block rounded-xl font-extrabold text-white transition-all hover:scale-105 hover:shadow-2xl ${padding} ${className}`}
      style={{ background: hex, boxShadow: `0 4px 32px ${hex}55` }}
    >
      {label}
    </a>
  )
}
