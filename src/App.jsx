import {useState, useEffect} from 'react';
import Categories from './components/Categories';
import Price from './components/Price';
import Card from './components/Card';
import products from './data/products.json';

function App() {
    const [filter, setFilter] = useState('All');
    const [sort, setSort] = useState('high');
    const [favourites, setFavourites] = useState(() => JSON.parse(localStorage.getItem('favourites')) || []);
    const categories = ['All', ...products.map(({category}) => category)];
    const filteredProducts = filter === 'All' ? products : products.filter(({category}) => category === filter);
    const sortedProducts = [...filteredProducts].sort((a, b) => (sort === 'high' ? b.price - a.price : a.price - b.price));
    const toggleFavourites = id => setFavourites(faves => (faves.includes(id) ? faves.filter(fav => fav !== id) : [...faves, id]));

    useEffect(() => localStorage.setItem('favourites', JSON.stringify(favourites)), [favourites]);

    return (
        <>
            <header>
                <h1>Yíká</h1>
            </header>
            <main>
                <Categories
                    categories={categories}
                    filter={filter}
                    setFilter={setFilter}
                />
                <Price
                    sort={sort}
                    setSort={setSort}
                />
                <section
                    className="cards"
                    aria-label="products"
                >
                    {sortedProducts.map(product => (
                        <Card
                            key={product.id}
                            product={product}
                            favourites={favourites}
                            toggleFavourites={toggleFavourites}
                        />
                    ))}
                </section>
            </main>
        </>
    );
}

export default App;
