import { PRODUCTS } from "./data";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function FilterableProductTable() {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleFilterTextChange = (e) => {
        setFilterText(e.target.value);
    }

    const handleInStockChange = (e) => {        
    setInStockOnly(e.target.checked);
    }

    return (
        <div>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={handleFilterTextChange} onInStockChange={handleInStockChange}/>
            <ProductTable products={PRODUCTS} filterText={filterText} inStockOnly={inStockOnly}/>
        </div>
       
    );
}