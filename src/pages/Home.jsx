import {
  ArrowRight, Calculator, Headphones, Laptop,
  ShieldCheck, Smartphone, Star, Truck, Watch, X, Zap
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { categories, products } from '../data/products'
import ProductCard from '../components/ProductCard'
import Claculate from '../components/Claculate'

const categoryIcons = {
  Smartphones: Smartphone,
  Laptops: Laptop,
  Audio: Headphones,
  Wearables: Watch,
}

export default function Home({ onAddToCart, onToggleFavorite, favorites }) {
  const [calculatorOpen, setCalculatorOpen] = useState(false)
  const featured = products.slice(0, 4)
  const topProduct = products[0]
  const secondProduct = products[1]

  retrun (
    <main className="home-page">
      {/* ══════════════════════════════════════════
          HERO — full-viewport split composition
      ══════════════════════════════════════════ */}
        <section className='hero-v2'>
            <div className="hero-copy-panel">
                  <p className="hero-eyebrow"><Zap size={11} /> TECHMARKET — COLLECTION 2026</p>
                  
                  <h1 className="hero-title">
                      <span className="hero-title-top">Objects</span>
                      <span className="hero-title-mid">with</span>
                      <span className="hero-title-bot"><em>intent.</em></span>
                    </h1>
                    
                    <p className="hero-sub">
                      A living index of tools that make ordinary days feel more capable.
                    </p>

                    <div className='hero-rating-pill'>
                      <Link className="btn-hero-primary" to="/products">
                        Enter the archive <ArrowRight size={16} />
                      </Link>
                    </div>
                                <div className="hero-rating-pill">
              <span className="stars-sm">★★★★★</span>
              <span>4.9 / 2,000+ users</span>
            </div>
          </div>
        </section>
                    {/* Floating stat cards */}
          <div className="hero-stats-row">
            <div className="hero-stat-card">
              <strong>{products.length}</strong>
              <span>Products</span>
            </div>
            <div className="hero-stat-card hero-stat-pink">
              <strong>98%</strong>
              <span>Satisfaction</span>
            </div>
            <div className="hero-stat-card hero-stat-lime">
              <strong>24h</strong>
              <span>Dispatch</span>
            </div>
          </div>

                  {/* Right panel — visual */}
        <div className="hero-visual-panel">
          {/* Big decorative circle */}
          <div className="hero-circle-bg"></div>
          </div>
                    {/* Main product frame */}
          <div className="hero-product-frame">
            <img
              src="https://cdn.prod.website-files.com/61a5e47b1afd0c116d16aa40/69faf4d31de66816e9aef2af_Frame%202087327708.png"
              alt="Tech products"
            />
            <div className="hero-frame-label">CURATED HARDWARE ✦</div>
          </div>
                    {/* Floating product card — top right */}
          <Link className="hero-float-card hero-float-top" to={`/products/${topProduct.id}`}>
            <img src={topProduct.image} alt={topProduct.title} />
            <div className="hero-float-info">
              <span>{topProduct.brand}</span>
              <strong>{topProduct.title}</strong>
              <em>${topProduct.price.toLocaleString('en-US')}</em>
            </div>
          </Link>
            <Link className="hero-float-card hero-float-bot" to={`/products/${secondProduct.id}`}>
            <img src={secondProduct.image} alt={secondProduct.title} />
            <div className="hero-float-info">
              <span>{secondProduct.brand}</span>
              <strong>{secondProduct.title}</strong>
              <em>${secondProduct.price.toLocaleString('en-US')}</em>
            </div>
          </Link>
                    {/* Sticker badge */}
          <div className="hero-sticker">
            <span>NEW</span>
            <span>DROP</span>
            <span>2026</span>
          </div>
                    {/* Orbits */}
          <div className="hero-orbit orbit-a"></div>
          <div className="hero-orbit orbit-b"></div>
    </main>

  )
}