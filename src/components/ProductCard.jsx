export default function ProductCard({ product, onAddToCart, onToggleFavorite, isFavorite, variant = 'default' }) {
  if (variant === 'large') return <LargeCard product={product} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} isFavorite={isFavorite} />
  if (variant === 'wide')  return <WideCard  product={product} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} isFavorite={isFavorite} />
  if (variant === 'mini')  return <MiniCard  product={product} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} isFavorite={isFavorite} />
  return <DefaultCard product={product} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} isFavorite={isFavorite} />
}
function DefaultCard({ product, onAddToCart, onToggleFavorite, isFavorite }) {
  return (
        <article className="pc pc-default">
        <div className="pc-image-wrap">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.title} loading="lazy" />
        </Link>
        <button className={`pc-fav ${isFavorite ? 'is-fav' : ''}`}
          onClick={() => onToggleFavorite(product.id)}
          aria-label={`${isFavorite ? 'Remove' : 'Add'} ${product.title} ${isFavorite ? 'from' : 'to'} favorites`}>
            
        </button>
  )
}



git add .
git commit -m "
git push