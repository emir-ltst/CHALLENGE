import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import CalculatorTool from '../components/CalculatorTool'
import { products } from '../data/products'

export default function Favorites({ favorites, onAddToCart, onToggleFavorite }) {
  const favoriteProducts = products.filter((product) => favorites.includes(product.id))
  return <main className="favorites-page"><div className="container"><CalculatorTool /><div className="page-intro"><p className="eyebrow">YOUR SHORTLIST</p><h1>Things worth keeping.</h1><p>A little collection of the products that caught your eye.</p></div>{favoriteProducts.length ? <div className="product-grid">{favoriteProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} isFavorite />)}</div> : <div className="empty-state"><Heart size={27} /><h2>Nothing saved yet.</h2><p>Tap the heart on a product to keep it close.</p><Link className="button button-dark" to="/products">Browse products</Link></div>}</div></main>
}