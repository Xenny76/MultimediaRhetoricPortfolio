// components/ScrollSpy.js
import { useEffect } from 'react'

export default function ScrollSpy() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // whenever at least 50% of the section is visible
          if (entry.intersectionRatio >= 0.5) {
            const id = entry.target.id
            window.history.replaceState(null, '', `#${id}`)
          }
        })
      },
      {
        root: null,           // the viewport
        threshold: [0.5],     // fire when crossing 50% visible (both directions)
      }
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  return null
}
