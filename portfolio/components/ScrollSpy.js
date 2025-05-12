import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ScrollSpy() {
  const router = useRouter()

  useEffect(() => {
    const sectionIds = ['home', 'about', 'about', 'experience', 'projects', 'contact']  // your section IDs
    const options = {
      root: null,
      rootMargin: '0px 0px -50% 0px',   // trigger when the section’s midpoint reaches the top half of viewport
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          // Push only the hash, shallow so it doesn’t re-fetch data
          router.replace(
            { pathname: router.pathname, hash: `#${id}` },
            undefined,
            { shallow: true }
          )
        }
      })
    }, options)

    // Observe each section
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [router])

  return null  // This component doesn’t render anything
}