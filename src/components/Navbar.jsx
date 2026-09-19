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
      </header>
  )
}