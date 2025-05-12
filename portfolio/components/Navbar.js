// components/Navbar.js
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { FaHome } from 'react-icons/fa'
import Link from 'next/link'

export default function Navbar() {
  const router = useRouter()

  // Define your nav items (hash and label)
  const items = [
    { hash: 'home', label: 'Profile', icon: <FaHome size={20}/> },
    { hash: 'about', label: 'About' },
    { hash: 'skills', label: 'Skills' },
    { hash: 'experience', label: 'Experience' },
    { hash: 'projects', label: 'Projects' },
    { hash: 'contact', label: 'Contact' }
  ]

  // Keep refs to each <li> so we can measure
  const itemRefs = useRef([])
  const navRef = useRef(null)
  const indicatorRef = useRef(null)

  // Track which index is active
  const [activeIdx, setActiveIdx] = useState(0)

  // Update activeIdx on hash change
  useEffect(() => {
    const handleHash = (url) => {
      const h = url.split('#')[1] || 'home'
      const idx = items.findIndex(i => i.hash === h)
      setActiveIdx(idx >= 0 ? idx : 0)
    }

    // Initial
    handleHash(window.location.href)
    // Listen for hash changes
    router.events.on('hashChangeComplete', handleHash)
    return () => router.events.off('hashChangeComplete', handleHash)
  }, [router.events])

  // Move the indicator whenever activeIdx changes
  useEffect(() => {
    const navRect = navRef.current.getBoundingClientRect()
    const activeEl = itemRefs.current[activeIdx]
    if (!activeEl) return

    const { left, width } = activeEl.getBoundingClientRect()
    const offset = left - navRect.left

    const indicator = indicatorRef.current
    indicator.style.width = `${width}px`
    indicator.style.transform = `translateX(${offset}px)`
  }, [activeIdx])

  return (
    <nav ref={navRef} className="fixed top-4 w-full flex justify-center z-50 pointer-events-none">
      {/* Indicator bar */}
      <div
        ref={indicatorRef}
        className="absolute -top-2 h-1.5 bg-white rounded-full transition-all duration-300 pointer-events-none"
      />

      <ul
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
        {items.map((item, i) => (
          <li
            key={item.hash}
            ref={el => (itemRefs.current[i] = el)}
            className="relative"
          >
            <Link href={`#${item.hash}`}>
              <a className="flex items-center space-x-2 px-3 py-1 rounded-full hover:bg-white/20 transition-colors">
                {item.icon}
                <span>{item.label}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
