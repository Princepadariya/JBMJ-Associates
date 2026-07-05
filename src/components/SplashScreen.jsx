import { useEffect, useRef, useState } from 'react'

const RING_RADIUS = 140
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

/*
  Timeline (normal motion), all times measured from mount:
    0     -600ms   background grid fades in
    100   -800ms   left/right trace lines grow inward toward center
    450   -950ms   center dot fades/scales in
    550   -1050ms  corner brackets (reticle) pop in
    650   -1350ms  logo fades/scales in
    1000  -1600ms  wordmark text fades up
    1650ms          circular ring starts "drawing" itself around the lockup
    2350ms          ring finishes drawing, holds briefly
    2450ms          "fly" phase starts, all at once:
                      - grid/lines/dot/corners/ring/text fade out (250ms)
                      - the bare logo starts animating toward the real
                        navbar logo's exact position/size (700ms)
                      - the white background starts fading away too (700ms),
                        so the page reveals WHILE the logo is still in
                        flight, not after it lands
    3150ms          logo arrives at the navbar position, background fade
                    finishes at the same moment — splash unmounts
*/
const T_RING = 1650
const T_FLY = 2450
const FLY_DURATION = 700
const REDUCED_MOTION_FADE = 350

export default function SplashScreen() {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const [visible, setVisible] = useState(true)
  const [stage, setStage] = useState('intro') // intro -> ring -> fly
  const logoRef = useRef(null)

  useEffect(() => {
    if (!visible) return

    if (prefersReducedMotion) {
      const t1 = setTimeout(() => setStage('fly'), 400)
      const t2 = setTimeout(() => setVisible(false), 400 + REDUCED_MOTION_FADE)
      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }

    const t1 = setTimeout(() => setStage('ring'), T_RING)
    const t2 = setTimeout(() => setStage('fly'), T_FLY)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [visible, prefersReducedMotion])

  // Fly: measure the real navbar logo and animate the bare splash logo onto
  // it, while the background fades away at the same time (not after).
  useEffect(() => {
    if (stage !== 'fly') return
    const splashLogo = logoRef.current
    let unmountTimer

    if (!splashLogo) {
      unmountTimer = setTimeout(() => setVisible(false), REDUCED_MOTION_FADE)
      return () => clearTimeout(unmountTimer)
    }

    let cancelled = false
    let rafId
    let attempts = 0

    const tryMeasureAndFly = () => {
      if (cancelled) return
      const navLogo = document.querySelector('.logo__icai-img')
      const navRect = navLogo?.getBoundingClientRect()

      // The navbar logo's box can be unmeasurable for a frame or two on a
      // cold page load (image not yet decoded, fonts still shifting the
      // header). Retry a few times rather than animating to a broken
      // (zero-size) target, which would make the logo silently vanish.
      if (!navRect || navRect.width < 10) {
        attempts += 1
        if (attempts < 20) {
          rafId = requestAnimationFrame(tryMeasureAndFly)
        } else {
          setVisible(false)
        }
        return
      }

      const splashRect = splashLogo.getBoundingClientRect()
      const scale = navRect.width / splashRect.width
      const dx = navRect.left + navRect.width / 2 - (splashRect.left + splashRect.width / 2)
      const dy = navRect.top + navRect.height / 2 - (splashRect.top + splashRect.height / 2)

      // Manipulate the DOM directly (not via React state) with a forced
      // synchronous reflow between the two states. A React-state +
      // double-rAF approach can have the browser coalesce both style
      // changes into a single frame depending on machine/frame timing,
      // which collapses the transition into an invisible instant jump.
      // Reading getBoundingClientRect() forces layout to flush, guaranteeing
      // the "from" state is committed before the "to" state is applied.
      splashLogo.style.transition = 'none'
      splashLogo.style.transform = 'translate(0px, 0px) scale(1)'
      void splashLogo.getBoundingClientRect()
      splashLogo.style.transition = `transform ${FLY_DURATION}ms cubic-bezier(0.65, 0, 0.35, 1)`
      splashLogo.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`

      unmountTimer = setTimeout(() => {
        if (!cancelled) setVisible(false)
      }, FLY_DURATION)
    }

    tryMeasureAndFly()
    return () => {
      cancelled = true
      cancelAnimationFrame(rafId)
      clearTimeout(unmountTimer)
    }
  }, [stage])

  useEffect(() => {
    if (!visible) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  if (!visible) return null

  const flying = stage === 'fly'
  const showRing = !prefersReducedMotion && (stage === 'ring' || stage === 'fly')

  return (
    <div className={`splash ${flying ? 'is-flying' : ''}`} aria-hidden="true">
      <div className="splash__grid" />
      <span className="splash__scan splash__scan--left" />
      <span className="splash__scan splash__scan--right" />
      <span className="splash__dot" />
      <div className="splash__frame">
        <span className="splash__corner splash__corner--tl" />
        <span className="splash__corner splash__corner--tr" />
        <span className="splash__corner splash__corner--bl" />
        <span className="splash__corner splash__corner--br" />
        {showRing && (
          <svg
            className="splash__ring"
            viewBox={`0 0 ${RING_RADIUS * 2 + 8} ${RING_RADIUS * 2 + 8}`}
          >
            <circle
              className="splash__ring-circle"
              cx={RING_RADIUS + 4}
              cy={RING_RADIUS + 4}
              r={RING_RADIUS}
              style={{ strokeDasharray: RING_CIRCUMFERENCE, strokeDashoffset: RING_CIRCUMFERENCE }}
            />
          </svg>
        )}
        <div className="splash__inner">
          <img
            ref={logoRef}
            src="/images/CA-India.jpg"
            alt=""
            className="splash__logo"
          />
          <div className="splash__text">
            <span className="splash__name">JBMJ &amp; Associates LLP</span>
            <span className="splash__tag">Chartered Accountants</span>
          </div>
        </div>
      </div>
    </div>
  )
}
