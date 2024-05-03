import React from "react";

const Suppliers = () => {
  const [data, loading] = useFetch("https://northwind.vercel.app/api/products");
  const [suppliers, supplierLoading] = useFetch(
    "https://northwind.vercel.app/api/suppliers"
  );

  console.log(suppliers);

  return (
    <>
      <div>
        {" "}
        {loading ? (
          <h1>loading...</h1>
        ) : (
          data?.map((item) => <div key={item.id}>{item?.name}</div>)
        )}
      </div>

      {supplierLoading ? (
        <h1>loading...</h1>
      ) : (
        suppliers?.map((item) => <div key={item.id}>{item?.companyName}</div>)
      )}
    </>
  );
};

export default Suppliers;
