import { Globe, Radio, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import Claculate from './Claculate.jsx'

export default function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div><Link className="brand footer-brand" to="/"><span className="brand-mark">T</span>Tech<span>Market</span></Link><p>Technology that fits your life.</p><div className="socials"><a href="#instagram" aria-label="Instagram"><Globe size={17} /></a><a href="#twitter" aria-label="Twitter"><Radio size={17} /></a><a href="#youtube" aria-label="Youtube"><Video size={17} /></a></div></div>
    <div><h4>Explore</h4><Link to="/products">All products</Link><Link to="/products">New arrivals</Link><Link to="/products">Best sellers</Link></div>
    <div><h4>Help</h4><a href="#shipping">Shipping & returns</a><a href="#support">Contact support</a><a href="#faq">FAQ</a></div>
    <div><h4>Stay in the loop</h4><p className="footer-copy">Product drops, smart tips, and offers. Once a month.</p><form className="subscribe-form"><input aria-label="Email address" placeholder="Your email address" type="email" /><button aria-label="Subscribe">↗</button></form></div>
  </div><div className="container footer-bottom"><span>© 2026 TechMarket</span><span>Designed for curious minds.</span></div></footer>
}