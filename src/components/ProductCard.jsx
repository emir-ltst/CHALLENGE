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
                      <Heart size={15} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
                <span className="pc-cat-badge">{product.category}</span>
      </div>
            <div className="pc-body">
        <div className="pc-meta">
          <span className="pc-brand">{product.brand}</span>
          <span className="pc-rating"><Star size={11} fill="currentColor" /> {product.rating}</span>
        </div>
        <Link to={`/products/${product.id}`}>
          <h3 className="pc-title">{product.title}</h3>
        </Link>
        <div className="pc-foot">
          <strong className="pc-price">${fmt(product.price)}</strong>
          <button className="pc-add" onClick={() => onAddToCart(product)} aria-label={`Add ${product.title} to cart`}>
            <Plus size={15} />
          </button>
        </div>
      </div>
    </article>
  )
}
