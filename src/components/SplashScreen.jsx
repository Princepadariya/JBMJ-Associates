import { useEffect, useState } from 'react'

const SESSION_KEY = 'jbmj_splash_shown'

export default function SplashScreen() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem(SESSION_KEY))
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    if (!visible) return
    sessionStorage.setItem(SESSION_KEY, '1')

    const hideTimer = setTimeout(() => setHiding(true), 2000)
    const removeTimer = setTimeout(() => setVisible(false), 2950)
    return () => {
      clearTimeout(hideTimer)
      clearTimeout(removeTimer)
    }
  }, [visible])

  useEffect(() => {
    if (!visible) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  if (!visible) return null

  return (
    <div className={`splash ${hiding ? 'is-hiding' : ''}`} aria-hidden="true">
      <div className="splash__grid" />
      <span className="splash__scan splash__scan--left" />
      <span className="splash__scan splash__scan--right" />
      <span className="splash__dot" />
      <div className="splash__frame">
        <span className="splash__corner splash__corner--tl" />
        <span className="splash__corner splash__corner--tr" />
        <span className="splash__corner splash__corner--bl" />
        <span className="splash__corner splash__corner--br" />
        <div className="splash__inner">
          <img src="/images/CA-India.jpg" alt="" className="splash__logo" />
          <div className="splash__text">
            <span className="splash__name">JBMJ &amp; Associates LLP</span>
            <span className="splash__tag">Chartered Accountants</span>
          </div>
        </div>
      </div>
    </div>
  )
}
