import { useState, useEffect, useRef } from 'react'
import { FaHome } from 'react-icons/fa'

export default function Navbar() {
  const items = [
    { hash: 'home',       label: <FaHome size={18}/> },
    { hash: 'about',      label: 'About' },
    { hash: 'skills',     label: 'Skills' },
    { hash: 'experience', label: 'Experience' },
    { hash: 'projects',   label: 'Projects' },
    { hash: 'contact',    label: 'Contact' },
  ]

  const ulRef        = useRef(null)
  const indicatorRef = useRef(null)
  const itemRefs     = useRef([])

  const [activeIdx, setActiveIdx] = useState(0)

  // Scroll‐spy observer: run once
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.5) {
            const id = entry.target.id
            const idx = items.findIndex((it) => it.hash === id)
            if (idx >= 0) {
              setActiveIdx(idx)
              window.history.replaceState(null, '', `#${id}`)
            }
          }
        })
      },
      { root: null, threshold: 0.5 }
    )

    items.forEach((it) => {
      const sec = document.getElementById(it.hash)
      if (sec) observer.observe(sec)
    })

    return () => observer.disconnect()
  }, [])

  // Indicator positioning
  useEffect(() => {
    const linkEl = itemRefs.current[activeIdx]
    if (!linkEl) return
    const left  = linkEl.offsetLeft
    const width = linkEl.offsetWidth
    const bar   = indicatorRef.current
    bar.style.width = `${width}px`
    bar.style.left  = `${left}px`
  }, [activeIdx])

  return (
    <nav className="fixed top-4 w-full flex justify-center z-50 pointer-events-none">
      <ul
        ref={ulRef}
        className="
          relative flex items-center
          bg-white/10 backdrop-blur-lg
          border border-white/20
          rounded-full
          px-6 py-2
          space-x-8
          text-white
          shadow-md
          pointer-events-auto
        "
      >
        <div
          ref={indicatorRef}
          className="absolute -top-2 h-1.5 bg-white rounded-full transition-all duration-300"
          style={{ left: 0, width: 0 }}
        />
        {items.map((it, i) => (
          <li key={it.hash}>
            <a
              href={`#${it.hash}`}
              ref={(el) => (itemRefs.current[i] = el)}
              className="flex items-center space-x-2 px-3 py-1 rounded-full hover:bg-white/20 transition-colors"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}