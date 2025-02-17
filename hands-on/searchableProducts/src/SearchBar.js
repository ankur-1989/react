export default function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockChange}) { 
    return (
        <form>
            <input type="text" placeholder="Search..." value={filterText} onChange={onFilterTextChange}/>
            <p>
                <input type="checkbox" name="stocked" value={inStockOnly} onChange={onInStockChange}/>
                <label htmlFor="stocked">Only show products in stock</label>
            </p>
        </form>
    );
}