import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { appState } from "../store/Store";
import { Product } from "../common/Interfaces";
import "./ProductPage.scss";
import NavBar from "../components/NavBar";
import { useState } from "react";
import FilterBar from "../components/FilterBar";

/*
  ProductPage component displays the NavBar, FliterBar components
  --> It will also display the products which are present in productArray (redux state array) after applying the filters and sort method. 
*/

function ProductPage() {
  let productsArray = useSelector((state: appState) => state.productsArray);
  const [filterItem,setFilterItem] = useState('');
  const [sortItem,setSortItem] = useState('');
  const [searchItem,setSearchItem] = useState('');
  const handleFilter = (value:string)=>{
    setFilterItem(value);
  }
  const handleSort = (value:string)=>{
    setSortItem(value);
  }
  const handleSearch = (value:string)=>{
    setSearchItem(value);
  }
  /* Filter the productsArray based on selected category i.e., filter applied from FilterBar */
  productsArray=productsArray.filter(item=> filterItem==='' ? (item.category).includes(filterItem) : item.category===filterItem);
  /* Filter the productsArray based on search input i.e., search input value from NavBar */ 
  productsArray=productsArray.filter(item=> (item.title.toLowerCase()).includes(searchItem.toLowerCase()));
  /* sort the productsArray based on option selected i.e., option value from input field from FilterBar */ 
  productsArray.sort((a:Product,b:Product)=> sortItem==='low to high' ? (a.price-b.price) : sortItem==='high to low' ? (b.price-a.price) : a.price);

  return (
    <>
      <NavBar handleSearch={handleSearch}/>
      <FilterBar handleFilter={handleFilter} handleSort={handleSort}/>
      {productsArray.length ? <div className="productPage">
        {productsArray.map((item: Product) => (
          <div className="productPage__productCard" key={item.id}>
            <ProductCard {...item} />
          </div>
        ))}
      </div>
      : <div><p>No results found!!</p></div>
      }
    </>
  );
}

export default ProductPage;
