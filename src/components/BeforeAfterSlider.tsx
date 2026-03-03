'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import Image from 'next/image'

interface Props {
  beforeSrc: string
  afterSrc: string
  beforeAlt?: string
  afterAlt?: string
  height?: number
  className?: string
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before',
  afterAlt = 'After (AI)',
  height = 480,
  className = '',
}: Props) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
    setPos(pct)
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true
    updatePos(e.clientX)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true
    updatePos(e.touches[0].clientX)
  }

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => { if (dragging.current) updatePos(e.clientX) }
    const onTouchMove = (e: TouchEvent) => { if (dragging.current) updatePos(e.touches[0].clientX) }
    const onUp = () => { dragging.current = false }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [updatePos])

  return (
    <div
      ref={containerRef}
      className={`ba-slider rounded-xl overflow-hidden select-none ${className}`}
      style={{ height, position: 'relative', cursor: 'col-resize' }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* BEFORE — full width base */}
      <Image
        src={beforeSrc}
        alt={beforeAlt}
        fill
        className="object-cover"
        draggable={false}
        priority
      />
      <span className="ba-label ba-label-before">Before</span>

      {/* AFTER — clipped by slider position */}
      <div
        className="ba-after"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          draggable={false}
        />
        <span className="ba-label ba-label-after">After</span>
      </div>

      {/* Handle */}
      <div
        className="ba-handle"
        style={{ left: `${pos}%` }}
      >
        <div className="ba-handle-circle">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 2L1 8l4 6M11 2l4 6-4 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
