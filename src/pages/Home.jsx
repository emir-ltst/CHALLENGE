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


    </main>

  )
}