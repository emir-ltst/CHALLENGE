import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function readStorage(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback } catch { return fallback }
}

export default function App() {
  const [cart, setCart] = useState(() => readStorage('techmarket-cart', []))
  const [favorites, setFavorites] = useState(() => readStorage('techmarket-favorites', []))
  useEffect(() => localStorage.setItem('techmarket-cart', JSON.stringify(cart)), [cart])
  useEffect(() => localStorage.setItem('techmarket-favorites', JSON.stringify(favorites)), [favorites])
  const addToCart = (product) => setCart((current) => { const existing = current.find((item) => item.id === product.id); return existing ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }] })
  const toggleFavorite = (productId) => setFavorites((current) => current.includes(productId) ? current.filter((id) => id !== productId) : [...current, productId])
  return <BrowserRouter><div className="app-shell"><Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} favoriteCount={favorites.length} /><Routes><Route path="*" element={<Home onAddToCart={addToCart} onToggleFavorite={toggleFavorite} favorites={favorites} />} /></Routes><Footer /></div></BrowserRouter>
}