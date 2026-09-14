import { Globe, Radio, Video } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer-v2">

      {/* ── Big zine title bar ── */}
      <div className="footer-zine-bar">
        <div className="footer-zine-inner container">
          <span className="footer-zine-title">TECH<em>MARKET</em></span>
          <div className="footer-zine-stars" aria-hidden="true">★ ★ ★ ★ ★</div>
          <span className="footer-zine-slogan">OBJECTS WITH INTENT — EST. 2026</span>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="container footer-main">
        {/* Col 1 — brand + about */}
        <div className="footer-col footer-col-brand">
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark">T</span>
            <span className="brand-wordmark">Tech<strong>Market</strong></span>
          </Link>
          <p className="footer-about">
            Technology that fits your life. Curated, checked, and backed by real humans.
          </p>
          <div className="footer-socials">
            <a href="#instagram" aria-label="Instagram"><Globe size={16} /></a>
            <a href="#twitter"   aria-label="Twitter"><Radio size={16} /></a>
            <a href="#youtube"   aria-label="Youtube"><Video size={16} /></a>
          </div>
        </div>

        {/* Col 2 — explore */}
        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/products">All products</Link>
          <Link to="/products">New arrivals</Link>
          <Link to="/products">Best sellers</Link>
          <Link to="/admin">Admin panel</Link>
        </div>

        {/* Col 3 — help */}
        <div className="footer-col">
          <h4>Help</h4>
          <a href="#shipping">Shipping & returns</a>
          <a href="#support">Contact support</a>
          <a href="#faq">FAQ</a>
        </div>

        {/* Col 4 — newsletter */}
        <div className="footer-col footer-col-newsletter">
          <h4>Stay in the loop</h4>
          <p className="footer-nl-desc">Product drops, smart tips, and offers. Once a month, no spam.</p>
          <form className="footer-nl-form">
            <input aria-label="Email address" placeholder="your@email.com" type="email" />
            <button type="button" aria-label="Subscribe">↗</button>
          </form>
          <div className="footer-badges">
            <span className="footer-badge">★ 4.9 RATED</span>
            <span className="footer-badge footer-badge-lime">FREE SHIP</span>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom-bar container">
        <span>© 2026 TechMarket — all rights reserved</span>
        <span className="footer-bottom-dot">✦</span>
        <span>Designed for curious minds.</span>
      </div>
    </footer>
  )
}
