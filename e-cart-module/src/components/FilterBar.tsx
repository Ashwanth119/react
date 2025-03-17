import { ChangeEvent, useState } from "react";

/* 
    FilterBar accepts the props
        --> handleFilter and handleSort from ProductPage
    --> It will update the selected filter and selected option to the ProductPage using handleFilter and handleSort methods. 
*/
function FilterBar(props: any) {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const handleClick = (item: string, index: number) => {
    setSelectedFilter(index);
    props.handleFilter(item);
  };
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    props.handleSort(e.target.value);
  };
  return (
    <div className="filterBar">
      <button
        onClick={() => handleClick("", 0)}
        style={{
          backgroundColor: selectedFilter === 0 ? 'darkblue' : "white",
          color: selectedFilter === 0 ? 'white' : "black",
        }}
      >
        All
      </button>
      <button
        onClick={() => handleClick("men's clothing", 1)}
        style={{
          backgroundColor: selectedFilter === 1 ? 'darkblue' : "white",
          color: selectedFilter === 1 ? 'white' : "black",
        }}
      >
        Men's clothing
      </button>
      <button
        onClick={() => handleClick("women's clothing", 2)}
        style={{
          backgroundColor: selectedFilter === 2 ? 'darkblue' : "white",
          color: selectedFilter === 2 ? 'white' : "black",
        }}
      >
        Women's clothing
      </button>
      <button
        onClick={() => handleClick("electronics", 3)}
        style={{
          backgroundColor: selectedFilter === 3 ? 'darkblue' : "white",
          color: selectedFilter === 3 ? 'white' : "black",
        }}
      >
        Electronics
      </button>
      <button
        onClick={() => handleClick("jewelery", 4)}
        style={{
          backgroundColor: selectedFilter === 4 ? 'darkblue' : "white",
          color: selectedFilter === 4 ? 'white' : "black",
        }}
      >
        Jewelery
      </button>
      <select onChange={handleSelect}>
        <option value="">Sort By Price</option>
        <option value="low to high">Low to High</option>
        <option value="high to low">High to Low</option>
      </select>
    </div>
  );
}

export default FilterBar;
