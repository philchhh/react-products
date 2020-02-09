import React from "react";
import axios from "axios";
import ProductList from "../components/Index/ProductList";
import ProductPagination from "../components/Index/ProductPagination";
import baseUrl from "../utils/baseUrl";

function Home({ products, totalPages }) {
  return (
    <div className="content-main">
      <p>
        Dolor ipsum labore ullamco excepteur veniam occaecat pariatur cillum
        veniam ex commodo id. Est laborum in culpa est quis. Nostrud aliqua
        Lorem amet nisi et exercitation non ipsum. Ex elit ut amet adipisicing
        ut sunt irure Lorem. Elit non magna exercitation aliquip ad laboris
        velit ut laborum commodo. Proident ut ad aute qui duis dolore.
      </p>
      <p>
        Nisi et exercitation non ipsum. Ex elit ut amet adipisicing ut sunt
        irure Lorem. Elit non magna exercitation aliquip ad laboris velit ut
        laborum commodo. Proident ut ad aute qui duis dolore.
      </p>

      <ProductList products={products} />
      <ProductPagination totalPages={totalPages} />
    </div>
  );
}

Home.getInitialProps = async ctx => {
  const page = ctx.query.page ? ctx.query.page : "1";
  const size = 9;

  const url = `${baseUrl}/api/products`;
  const payload = { params: { page, size } };

  // Get data from server
  const response = await axios.get(url, payload);
  // Note: object will be merged with existing props

  // Return response as an object
  return response.data;
};

export default Home;
