function Categories({categories, filter, setFilter}) {
    return (
        <div
            className="categories"
            aria-label="categories"
            role="radiogroup"
        >
            {categories.map(category => (
                <button
                    key={category}
                    className={category === filter ? 'active' : undefined}
                    aria-checked={category === filter}
                    role="radio"
                    onClick={() => setFilter(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default Categories;
