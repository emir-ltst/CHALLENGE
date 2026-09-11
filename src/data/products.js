export const categories = [
  { id: 'smartphones', name: 'Smartphones', description: 'Pocket-sized powerhouses', image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80' },
  { id: 'laptops', name: 'Laptops', description: 'Work without limits', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80' },
  { id: 'audio', name: 'Audio', description: 'Sound, redefined', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80' },
  { id: 'wearables', name: 'Wearables', description: 'Stay in your flow', image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=800&q=80' },
  { id: 'gaming', name: 'Gaming', description: 'Play at full power', image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80' },
]

export const products = [
  { id: 1, title: 'iPhone 15 Pro', brand: 'Apple', category: 'Smartphones', price: 999, rating: 4.9, stock: 18, image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=900&q=85', description: 'Titanium design, A17 Pro chip, and a pro camera system that brings your best ideas to life.' },
  { id: 2, title: 'Galaxy Book4 Ultra', brand: 'Samsung', category: 'Laptops', price: 1399, rating: 4.8, stock: 7, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85', description: 'A premium creator laptop with brilliant display, all-day battery, and desktop-class performance.' },
  { id: 3, title: 'QuietComfort Ultra', brand: 'Bose', category: 'Audio', price: 429, rating: 4.7, stock: 24, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85', description: 'Immersive spatial audio and world-class noise cancellation for your most focused listening.' },
  { id: 4, title: 'Watch Series 9', brand: 'Apple', category: 'Wearables', price: 399, rating: 4.8, stock: 11, image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=900&q=85', description: 'Powerful insights, bright display, and a smarter way to stay connected to what matters.' },
  { id: 5, title: 'Pixel 9 Pro', brand: 'Google', category: 'Smartphones', price: 899, rating: 4.6, stock: 15, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85', description: 'Google AI meets a polished design and a camera built for the moments you want to remember.' },
  { id: 6, title: 'PlayStation 5 Slim', brand: 'Sony', category: 'Gaming', price: 499, rating: 4.9, stock: 5, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=85', description: 'Experience lightning-fast loading, immersive haptic feedback, and a new generation of play.' },
  { id: 7, title: 'Magic Keyboard', brand: 'Apple', category: 'Accessories', price: 149, rating: 4.5, stock: 32, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85', description: 'A refined wireless keyboard with a comfortable typing experience and reliable all-day battery.' },
  { id: 8, title: 'iPad Air M2', brand: 'Apple', category: 'Tablets', price: 599, rating: 4.8, stock: 20, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=85', description: 'Thin, powerful, and ready for creativity, productivity, and everything in between.' },
]

export const brands = [...new Set(products.map((product) => product.brand))]