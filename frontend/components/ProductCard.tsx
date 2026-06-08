import Link from "next/link";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
}: Props) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg">
          {name}
        </h2>

        <p className="text-xl font-bold mt-2">
          ${price}
        </p>

        <div className="flex gap-2 mt-4">
          <Link
            href={`/products/${id}`}
            className="flex-1 text-center bg-black text-white py-2 rounded"
          >
            View
          </Link>

          <button className="flex-1 border py-2 rounded">
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
}