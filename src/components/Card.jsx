function Card({product: {image, name, price, id}, favourites, toggleFavourites}) {
    const isFavourite = favourites.includes(id);

    return (
        <article className="card">
            <img
                src={image}
                alt={`${name}.`}
            />
            <h2>{name}</h2>
            <div>
                <p>${price}</p>
                <button
                    className={isFavourite ? 'favourite' : undefined}
                    aria-label={isFavourite ? 'remove favourite' : 'favourite'}
                    onClick={() => toggleFavourites(id)}
                >
                    {isFavourite ? '❤️' : '🤍'}
                </button>
            </div>
        </article>
    );
}

export default Card;
