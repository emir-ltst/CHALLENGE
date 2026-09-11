import { Filter, Search, SlidersHorizontal, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { brands, categories, products } from '../data/products'

export default function Products({ onAddToCart, onToggleFavorite, favorites }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [category, setCategory] = useState(searchParams.get('category') || 'All')
  const [brand, setBrand] = useState('All')
  const [maxPrice, setMaxPrice] = useState(1600)
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  useEffect(() => setSearchParams(query ? { q: query } : {}, { replace: true }), [query, setSearchParams])
  const visibleProducts = products.filter((product) => {
    const searchMatch = `${product.title} ${product.brand} ${product.category}`.toLowerCase().includes(query.toLowerCase())
    return searchMatch && (category === 'All' || product.category === category) && (brand === 'All' || product.brand === brand) && product.price <= maxPrice
  }).sort((a, b) => sort === 'price-low' ? a.price - b.price : sort === 'price-high' ? b.price - a.price : sort === 'name' ? a.title.localeCompare(b.title) : a.id - b.id)
  const clearFilters = () => { setQuery(''); setCategory('All'); setBrand('All'); setMaxPrice(1600); setSort('featured') }
  return <main className="catalog-page"><div className="container"><div className="page-intro"><p className="eyebrow">THE COLLECTION</p><h1>All the good stuff.</h1><p>Useful, beautiful technology chosen with a little more care.</p></div><div className="catalog-toolbar"><div className="search-field"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products, brands, categories..." /></div><button className="filter-toggle" onClick={() => setFiltersOpen(!filtersOpen)}><SlidersHorizontal size={16} /> Filters</button><label className="sort-select">Sort by <select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="name">Name: A-Z</option></select></label></div><div className="catalog-layout"><aside className={`filter-panel ${filtersOpen ? 'is-open' : ''}`}><div className="filter-heading"><strong>Filter by</strong><button onClick={() => setFiltersOpen(false)} aria-label="Close filters"><X size={18} /></button></div><label>Category<select value={category} onChange={(event) => setCategory(event.target.value)}><option>All</option>{categories.map((item) => <option key={item.id}>{item.name}</option>)}<option>Accessories</option><option>Tablets</option></select></label><label>Brand<select value={brand} onChange={(event) => setBrand(event.target.value)}><option>All</option>{brands.map((item) => <option key={item}>{item}</option>)}</select></label><label>Price up to <strong>${maxPrice}</strong><input className="range-input" type="range" min="100" max="1600" step="50" value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} /></label><button className="clear-button" onClick={clearFilters}><Filter size={14} /> Clear filters</button></aside><div className="catalog-results"><div className="results-count"><span>{visibleProducts.length} products</span>{query && <span>Results for “{query}”</span>}</div>{visibleProducts.length ? <div className="product-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} isFavorite={favorites.includes(product.id)} />)}</div> : <div className="empty-state"><Search size={25} /><h2>No products found</h2><p>Try broadening your search or clearing a filter.</p><button className="button button-dark" onClick={clearFilters}>Reset search</button></div>}</div></div></div></main>
}