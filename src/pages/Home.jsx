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

                    </div>
            </div>
        </section>

    </main>

  )
}