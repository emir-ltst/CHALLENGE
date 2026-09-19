import { Heart, Menu, Search, ShoppingBag, UserRound, X, Zap } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'


export default function Navbar({ cartCount, favoriteCount }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
      <header className="site-header">
          <div className="announcement">
            <div className="icker-inner">
          <span>FREE SHIPPING OVER $75 <em>★</em> 30-DAY RETURNS <em>★</em> 2,000+ HAPPY CUSTOMERS <em>★</em> FREE SHIPPING OVER $75 <em>★</em> 30-DAY RETURNS <em>★</em> 2,000+ HAPPY CUSTOMERS <em>★</em> FREE SHIPPING OVER $75 <em>★</em> 30-DAY RETURNS <em>★</em></span>
            </div>
          </div>

          <nav className='navbar container'>
            <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">T</span>
          <span className="brand-wordmark">Tech<strong>Market</strong></span>
          <span className="brand-sticker">Y2K</span>
            </Link>

            <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>Shop</NavLink>
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>New arrivals</NavLink>
          <NavLink to="/#why-us" onClick={() => setMenuOpen(false)}>About</NavLink>
          <span className="nav-badge"><Zap size={10} /> SALE</span>
            </div>

          <div className="nav-actions">
          <Link className="icon-button" to="/products" aria-label="Search products">
            <Search size={18} />
          </Link>
          <Link className="icon-button action-with-count" to="/favorites" aria-label="Favorites">
            <Heart size={18} />
            {favoriteCount > 0 && <small>{favoriteCount}</small>}
          </Link>
          <Link className="icon-button action-with-count cart-icon-btn" to="/cart" aria-label="Shopping cart" >
          <ShoppingBag size={18} />
            {cartCount > 0 && <small>{cartCount}</small>}
          </Link>
          <Link className="nav-account-btn" to="/login">
          <UserRound size={15} />
            <span>Account</span>
          </Link>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            
          </button>
          </div>
          </nav>


      </header>
  )
}