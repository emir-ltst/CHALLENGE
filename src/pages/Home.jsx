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

  return (
    <main className="home-page">

      {/* ══════════════════════════════════════════
          HERO — full-viewport split composition
      ══════════════════════════════════════════ */}
      <section className="hero-v2">
        {/* Left panel — copy */}
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

          <div className="hero-cta-row">
            <Link className="btn-hero-primary" to="/products">
              Enter the archive <ArrowRight size={16} />
            </Link>
            <div className="hero-rating-pill">
              <span className="stars-sm">★★★★★</span>
              <span>4.9 / 2,000+ users</span>
            </div>
          </div>

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
        </div>

        {/* Right panel — visual */}
        <div className="hero-visual-panel">
          {/* Big decorative circle */}
          <div className="hero-circle-bg"></div>

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

          {/* Floating product card — bottom left */}
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

          {/* Coord label */}
          <div className="hero-coord">LAT 40.71 / LONG 74.00</div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MARQUEE STRIP
      ══════════════════════════════════════════ */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="marquee-group">
              TECH MARKET <em>★</em> BEST SELLERS <em>★</em> NEW DROPS <em>★</em> FREE SHIPPING <em>★</em> 30-DAY RETURNS <em>★</em> CURATED HARDWARE <em>★</em>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BENTO CATEGORIES — asymmetric grid
      ══════════════════════════════════════════ */}
      <section className="bento-section">
        <div className="bento-header">
          <div className="bento-header-left">
            <p className="section-eyebrow">01 / NAVIGATE</p>
            <h2 className="section-title">Find your<br /><em>category.</em></h2>
          </div>
          <div className="bento-header-right">
            <Link className="text-link" to="/products">View all <ArrowRight size={15} /></Link>
            <p className="bento-sub">From pocket-sized powerhouses to desktop beasts — we stock the full stack.</p>
          </div>
        </div>

        <div className="bento-grid">
          {/* Large card — spans 2 rows and 2 cols */}
          {categories.slice(0, 1).map((cat) => {
            const Icon = categoryIcons[cat.name] || Smartphone
            return (
              <Link key={cat.id} className="bento-card bento-card-xl" to={`/products?category=${cat.name}`}>
                <img src={cat.image} alt={cat.name} />
                <div className="bento-overlay">
                  <span className="bento-index">01</span>
                  <Icon size={22} />
                  <h3>{cat.name}</h3>
                  <p>{cat.description}</p>
                  <span className="bento-cta">Shop now →</span>
                </div>
              </Link>
            )
          })}

          {/* Medium cards */}
          {categories.slice(1, 3).map((cat, i) => {
            const Icon = categoryIcons[cat.name] || Smartphone
            return (
              <Link key={cat.id} className="bento-card bento-card-md" to={`/products?category=${cat.name}`}>
                <img src={cat.image} alt={cat.name} />
                <div className="bento-overlay">
                  <span className="bento-index">0{i + 2}</span>
                  <Icon size={18} />
                  <h3>{cat.name}</h3>
                  <p>{cat.description}</p>
                </div>
              </Link>
            )
          })}

          {/* Small cards */}
          {categories.slice(3, 5).map((cat, i) => {
            const Icon = categoryIcons[cat.name] || Smartphone
            return (
              <Link key={cat.id} className="bento-card bento-card-sm" to={`/products?category=${cat.name}`}>
                <img src={cat.image} alt={cat.name} />
                <div className="bento-overlay">
                  <span className="bento-index">0{i + 4}</span>
                  <Icon size={16} />
                  <h3>{cat.name}</h3>
                </div>
              </Link>
            )
          })}

          {/* Calculator tile */}
          <button
            className={`bento-card bento-card-calc ${calculatorOpen ? 'is-open' : ''}`}
            onClick={() => setCalculatorOpen((o) => !o)}
            aria-expanded={calculatorOpen}
          >
            {calculatorOpen ? (
              <div className="bento-calc-inner">
                <div className="bento-calc-head">
                  <span>QUICK CALC</span>
                  <X size={16} />
                </div>
                <Claculate />
              </div>
            ) : (
              <div className="bento-overlay">
                <span className="bento-index">06</span>
                <Calculator size={18} />
                <h3>Calculator</h3>
                <p>Run numbers before you choose.</p>
              </div>
            )}
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED — diagonal magazine layout
      ══════════════════════════════════════════ */}
      <section className="featured-v2">
        <div className="featured-diagonal-bg"></div>

        <div className="featured-inner container">
          <div className="featured-header">
            <div>
              <p className="section-eyebrow">THE SHORTLIST</p>
              <h2 className="section-title">Popular<br /><em>right now.</em></h2>
            </div>
            <Link className="text-link" to="/products">Shop all <ArrowRight size={15} /></Link>
          </div>

          {/* Big editorial top row: 1 large + 2 stacked */}
          <div className="featured-editorial">
            <div className="editorial-main">
              <ProductCard
                product={featured[0]}
                onAddToCart={onAddToCart}
                onToggleFavorite={onToggleFavorite}
                isFavorite={favorites.includes(featured[0].id)}
                variant="large"
              />
            </div>
            <div className="editorial-stack">
              <ProductCard
                product={featured[1]}
                onAddToCart={onAddToCart}
                onToggleFavorite={onToggleFavorite}
                isFavorite={favorites.includes(featured[1].id)}
                variant="wide"
              />
              <ProductCard
                product={featured[2]}
                onAddToCart={onAddToCart}
                onToggleFavorite={onToggleFavorite}
                isFavorite={favorites.includes(featured[2].id)}
                variant="wide"
              />
            </div>
          </div>

          {/* Bottom scrolling row */}
          <div className="featured-scroll-row">
            {products.slice(4, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onToggleFavorite={onToggleFavorite}
                isFavorite={favorites.includes(product.id)}
                variant="mini"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY US — asymmetric stat blocks
      ══════════════════════════════════════════ */}
      <section className="why-v2" id="why-us">
        {/* Background decoration */}
        <div className="why-bg-text">GOOD.</div>
        <div className="why-dots"></div>

        <div className="container">
          <div className="why-top-row">
            <div className="why-intro">
              <p className="section-eyebrow">02 / THE PROTOCOL</p>
              <h2 className="section-title">Good products.<br /><em>Better practice.</em></h2>
              <p className="why-body">
                We keep the signal clean: fewer objects, better decisions, and support that stays human.
              </p>
            </div>

            {/* Big stat block */}
            <div className="why-big-stat">
              <span className="why-stat-number">98.4</span>
              <span className="why-stat-label">/ 100<br />TRUST INDEX</span>
            </div>
          </div>

          {/* Feature panels — asymmetric row */}
          <div className="why-panels">
            <div className="why-panel why-panel-pink">
              <span className="why-panel-num">01</span>
              <Truck size={28} />
              <strong>Fast, careful delivery</strong>
              <small>Free shipping over $75, always tracked and insured.</small>
            </div>
            <div className="why-panel why-panel-lime why-panel-tall">
              <span className="why-panel-num">02</span>
              <ShieldCheck size={28} />
              <strong>Quality, guaranteed</strong>
              <small>Every product is checked and backed by a full warranty.</small>
              {/* Decorative stat */}
              <div className="why-panel-stat">
                <strong>30</strong>
                <span>day<br />returns</span>
              </div>
            </div>
            <div className="why-panel why-panel-white">
              <span className="why-panel-num">03</span>
              <Headphones size={28} />
              <strong>Real human support</strong>
              <small>Friendly advice from people who actually know tech.</small>
            </div>
            <div className="why-panel why-panel-dark">
              <span className="why-panel-num">04</span>
              <Star size={28} />
              <strong>Rated 4.9★ by users</strong>
              <small>Over 2,000 verified reviews. No fake stars here.</small>
            </div>
          </div>

          {/* Signal bar */}
          <div className="why-signal-bar">
            <span className="signal-dot"></span>
            <span>PROTOCOL ACTIVE</span>
            <span className="signal-line"></span>
            <span>NO HIDDEN FEES</span>
            <span className="signal-line"></span>
            <span>30 DAY RETURNS</span>
            <span className="signal-line"></span>
            <span>HUMAN VERIFIED</span>
            <span className="signal-dot"></span>
          </div>
        </div>
      </section>

    </main>
  )
}
