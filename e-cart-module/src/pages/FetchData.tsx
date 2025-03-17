import axios from "axios";
import { useEffect } from "react";
import { storeProducts } from "../reducers/Reducer";
import { useDispatch } from "react-redux";

/*
  It fetches the data from API "https://fakestoreapi.com/products" and store the data in redux using storeProducts action in Slice.
*/
function FetchData() {
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(storeProducts(response.data));
      })
      .then()
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }

  return <></>;
}

export default FetchData;
