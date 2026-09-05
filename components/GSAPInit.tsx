'use client'
import { useEffect } from 'react'

export default function GSAPInit() {
  useEffect(() => {
    const init = async () => {
      const { default: gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      gsap.set('.gsap-heading', { opacity: 0, y: 28 })
      gsap.set('.gsap-card', { opacity: 0, y: 44 })
      gsap.set('.gsap-hero-img', { opacity: 0, scale: 0.96 })
      gsap.set('.gsap-topics', { opacity: 0, x: -20 })

      ScrollTrigger.batch('.gsap-heading', {
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.08,
          }),
        start: 'top 88%',
        once: true,
      })

      ScrollTrigger.batch('.gsap-card', {
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', stagger: 0.1,
          }),
        start: 'top 84%',
        once: true,
      })

      const heroImg = document.querySelector<HTMLElement>('.gsap-hero-img')
      if (heroImg) {
        gsap.to(heroImg, { opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out', delay: 0.25 })
        gsap.to(heroImg, {
          y: -30,
          ease: 'none',
          scrollTrigger: { trigger: heroImg, start: 'top top', end: '+=600', scrub: 1.8 },
        })
      }

      const topics = document.querySelector<HTMLElement>('.gsap-topics')
      if (topics) {
        gsap.to(topics, {
          opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: topics, start: 'top 90%', once: true },
        })
      }

      const lines = document.querySelectorAll<HTMLElement>('.gsap-line')
      lines.forEach((line) => {
        gsap.fromTo(line,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1, duration: 0.9, ease: 'power4.out',
            scrollTrigger: { trigger: line, start: 'top 88%', once: true },
          }
        )
      })

      const counters = document.querySelectorAll<HTMLElement>('[data-count]')
      counters.forEach((el) => {
        const target = parseInt(el.dataset.count ?? '0', 10)
        gsap.fromTo({ val: 0 }, { val: target },
          {
            duration: 1.5, ease: 'power2.out',
            onUpdate() { el.textContent = Math.round((this as any).targets()[0].val).toLocaleString() },
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          }
        )
      })
    }

    init()

    return () => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill())
      })
    }
  }, [])

  return null
}
