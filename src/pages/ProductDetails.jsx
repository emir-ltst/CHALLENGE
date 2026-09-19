import React from 'react'
import { ArrowLeft, Heart, Plus, ShieldCheck, Star, Truck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'


export default function ProductDetails({ onAddToCart, onToggleFavorite, favorites }) {
  const { id } = useParams()
  if (!product) return <main className="empty-state page-empty"><h2>Product not found</h2><Link className="button button-dark" to="/products">Back to products</Link></main>
  const isFavorite = favorites.includes(product.id)
