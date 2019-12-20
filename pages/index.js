import React from "react";
import axios from "axios";
import ProductList from "../components/Index/ProductList";
import baseUrl from "../utils/baseUrl";

function Home({ products }) {
  return <ProductList products={products} />;
}

Home.getInitialProps = async () => {
  // Get data from server
  // Return response as an object
  const url = `${baseUrl}/api/products`;
  const response = await axios.get(url);
  // Note: object will be merged with existing props
  return { products: response.data };
};

export default Home;
