import CategoryCard from "@/components/shared/CategoryCard";
import React from "react";

const ProductCategory = ({ products }) => {
  console.log(products);
  if (!products && products?.data?.length === 0) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  return (
    <div>
      {" "}
      {products?.data?.map((product) => (
        <CategoryCard key={product?._id} product={product} />
      ))}
    </div>
  );
};

export default ProductCategory;

// Server side Randering
export const getServerSideProps = async (context) => {
  const { query } = context;
  const res = await fetch(
    `http://localhost:3000/api/product?category=${query.productcategory}`
  );
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};
