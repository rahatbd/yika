function Price({sort, setSort}) {
    return (
        <form>
            <label htmlFor="price">Price:&nbsp;</label>
            <select
                id="price"
                value={sort}
                onChange={event => setSort(event.target.value)}
            >
                <option value="high">High to Low</option>
                <option value="low">Low to High</option>
            </select>
        </form>
    );
}

export default Price;
