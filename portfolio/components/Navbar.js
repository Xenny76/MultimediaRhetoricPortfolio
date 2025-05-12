// components/Navbar.js
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { FaHome } from 'react-icons/fa'

export default function Navbar() {
  const router = useRouter()
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

  // 1) Update activeIdx via Next.js router events
  useEffect(() => {
    const onHashChange = (url) => {
      const hash = url.split('#')[1] || 'home'
      const idx = items.findIndex((i) => i.hash === hash)
      setActiveIdx(idx >= 0 ? idx : 0)
    }
    // initial
    onHashChange(router.asPath)
    router.events.on('hashChangeComplete', onHashChange)
    return () => {
      router.events.off('hashChangeComplete', onHashChange)
    }
  }, [router.events, router.asPath, items])

  // 2) Slide the indicator over the active <a>
  useEffect(() => {
    const ulRect = ulRef.current.getBoundingClientRect()
    const el     = itemRefs.current[activeIdx]
    if (!el) return
    const { left, width } = el.getBoundingClientRect()
    indicatorRef.current.style.width     = `${width}px`
    indicatorRef.current.style.transform = `translateX(${left - ulRect.left}px)`
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
        />

        {items.map((it, i) => (
          <li key={it.hash} className="relative">
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
