type Props = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: Props) {
  const product = {
    id: params.id,
    name: "iPhone 17",
    price: 1200,
    description: "Latest Apple phone",
  };

  return (
    <div className="container mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-96 bg-gray-100 rounded" />

        <div>
          <h1 className="text-3xl font-bold">
            {product.name}
          </h1>

          <p className="text-xl mt-3">
            ${product.price}
          </p>

          <p className="mt-4">
            {product.description}
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}