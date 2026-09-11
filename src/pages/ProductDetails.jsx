import { ArrowLeft, Heart, Plus, ShieldCheck, Star, Truck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'

export default function ProductDetails({ onAddToCart, onToggleFavorite, favorites }) {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))
  if (!product) return <main className="empty-state page-empty"><h2>Product not found</h2><Link className="button button-dark" to="/products">Back to products</Link></main>
  const isFavorite = favorites.includes(product.id)
  return <main className="detail-page"><div className="container"><Link className="back-link" to="/products"><ArrowLeft size={15} /> Back to collection</Link><div className="detail-layout"><div className="detail-image"><img src={product.image} alt={product.title} /><span>{product.category}</span></div><div className="detail-copy"><p className="eyebrow">{product.brand}</p><h1>{product.title}</h1><div className="detail-rating"><Star size={15} fill="currentColor" /> {product.rating} <span>·</span> 24 reviews</div><p className="detail-description">{product.description}</p><div className="detail-price">${product.price.toLocaleString()}</div><p className="stock"><span></span> In stock · ships within 24 hours</p><div className="detail-actions"><button className="button button-dark" onClick={() => onAddToCart(product)}>Add to cart <Plus size={16} /></button><button className={`favorite-detail ${isFavorite ? 'is-favorite' : ''}`} onClick={() => onToggleFavorite(product.id)}><Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} /> {isFavorite ? 'Saved' : 'Save'}</button></div><div className="detail-perks"><div><Truck size={19} /><span><strong>Free delivery</strong><small>On orders over $75</small></span></div><div><ShieldCheck size={19} /><span><strong>30-day returns</strong><small>Easy, no-questions returns</small></span></div></div></div></div></div></main>
}