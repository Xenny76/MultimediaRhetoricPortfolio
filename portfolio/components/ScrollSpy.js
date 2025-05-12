// components/ScrollSpy.js
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ScrollSpy() {
  const router = useRouter()

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    if (!sections.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.5) {
            const id = entry.target.id
            // THIS will emit Next.js hashChangeComplete
            router.replace({ hash: `#${id}` }, undefined, { shallow: true })
          }
        })
      },
      { root: null, threshold: 0.5 }
    )

    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [router])

  return null
}
