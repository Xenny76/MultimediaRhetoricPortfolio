// components/Navbar.js
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
  const itemRefs     = useRef([])    // will hold refs to each <a>
  const [activeIdx, setActiveIdx] = useState(0)

  // 1) Observe each section and update activeIdx + URL when 50% visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.5) {
            const id = entry.target.id
            const idx = items.findIndex((it) => it.hash === id)
            if (idx >= 0 && idx !== activeIdx) {
              setActiveIdx(idx)
              // update URL without scrolling
              window.history.replaceState(null, '', `#${id}`)
            }
          }
        })
      },
      { root: null, threshold: 0.5 }
    )

    // attach to each section by id
    items.forEach((it) => {
      const sec = document.getElementById(it.hash)
      if (sec) observer.observe(sec)
    })

    return () => observer.disconnect()
  }, [activeIdx, items])

  // Move the indicator pill on activeIdx change
  useEffect(() => {
    const linkEl = itemRefs.current[activeIdx]
    if (!linkEl) return

    // offsetLeft/offsetWidth are relative to the ul (position:relative)
    const left  = linkEl.offsetLeft
    const width = linkEl.offsetWidth

    const bar = indicatorRef.current
    bar.style.width     = `${width}px`
    bar.style.left      = `${left}px`
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
        {/* indicator pill */}
        <div
            ref={indicatorRef}
            className="absolute -top-2 h-1.5 bg-white rounded-full transition-all duration-300"
            style={{ left: 0, width: 0 }}
        />

        {items.map((it, i) => (
          <li key={it.hash} className="relative">
            <a
              id={`nav-${it.hash}`}
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
