import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { FaHome } from 'react-icons/fa'
import Link from 'next/link'

export default function Navbar() {
  const router = useRouter()
  const items = [
    { hash: 'home', label: 'Home', icon: <FaHome size={20}/> },
    { hash: 'about', label: 'About' },
    { hash: 'skills', label: 'Skills' },
    { hash: 'experience', label: 'Experience' },
    { hash: 'projects', label: 'Projects' },
    { hash: 'contact', label: 'Contact' }
  ]

  const ulRef = useRef(null)
  const indicatorRef = useRef(null)
  const itemRefs = useRef([])

  const [activeIdx, setActiveIdx] = useState(0)

  // Update activeIdx on hash change
  useEffect(() => {
    const handleHash = (url) => {
      const h = url.split('#')[1] || 'home'
      const idx = items.findIndex(i => i.hash === h)
      setActiveIdx(idx < 0 ? 0 : idx)
    }
    handleHash(window.location.href)
    router.events.on('hashChangeComplete', handleHash)
    return () => router.events.off('hashChangeComplete', handleHash)
  }, [router.events])

  // Move indicator inside <ul>
  useEffect(() => {
    const ulRect = ulRef.current.getBoundingClientRect()
    const activeEl = itemRefs.current[activeIdx]
    if (!activeEl) return

    const { left, width } = activeEl.getBoundingClientRect()
    const offsetX = left - ulRect.left

    const bar = indicatorRef.current
    bar.style.width = `${width}px`
    bar.style.transform = `translateX(${offsetX}px)`
  }, [activeIdx])

  return (
    <nav className="fixed top-4 w-full flex justify-center z-50">
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
        "
      >
        {/* indicator */}
        <div
          ref={indicatorRef}
          className="absolute -top-2 h-1.5 bg-white rounded-full transition-all duration-300"
        />

        {items.map((item, i) => (
          <li
            key={item.hash}
            ref={el => (itemRefs.current[i] = el)}
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
