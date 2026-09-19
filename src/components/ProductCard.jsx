export default function ProductCard({ product, onAddToCart, onToggleFavorite, isFavorite, variant = 'default' }) {
  if (variant === 'large') return <LargeCard product={product} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} isFavorite={isFavorite} />
  if (variant === 'wide')  return <WideCard  product={product} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} isFavorite={isFavorite} />
  if (variant === 'mini')  return <MiniCard  product={product} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} isFavorite={isFavorite} />


}
