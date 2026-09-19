export default function ProductCard({ product, onAddToCart, onToggleFavorite, isFavorite, variant = 'default' }) {
  if (variant === 'large') return <LargeCard product={product} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} isFavorite={isFavorite} />


}
