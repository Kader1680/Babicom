async function getProducts() {
  const res = await fetch(
    "http://localhost:8080/products",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>

      {products.map((product: any ) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}