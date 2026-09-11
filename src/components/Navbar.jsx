import { Heart, Menu, Search, ShoppingBag, UserRound, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar({ cartCount, favoriteCount }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinks = [{ label: 'Shop', to: '/products' }, { label: 'Categories', to: '/products' }, { label: 'About', to: '/#why-us' }]

  return (
    <header className="site-header">
      <div className="announcement">Free shipping on orders over $75 <span>•</span> 30-day easy returns</div>
      <nav className="navbar container">
        <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}><span className="brand-mark">T</span>Tech<span>Market</span></Link>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => <NavLink key={link.label} to={link.to} onClick={() => setMenuOpen(false)}>{link.label}</NavLink>)}
        </div>
        <div className="nav-actions">
          <Link className="icon-button" to="/products" aria-label="Search products"><Search size={19} /></Link>
          <Link className="icon-button action-with-count" to="/favorites" aria-label="Favorites"><Heart size={19} /><small>{favoriteCount}</small></Link>
          <Link className="icon-button action-with-count" to="/cart" aria-label="Shopping cart"><ShoppingBag size={19} /><small>{cartCount}</small></Link>
          <Link className="account-link" to="/login"><UserRound size={18} /> <span>Account</span></Link>
        </div>
      </nav>
    </header>
  )
}