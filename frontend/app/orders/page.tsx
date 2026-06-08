export default function OrdersPage() {
  const orders = [
    {
      id: 1,
      total: 250,
      status: "Delivered",
    },
    {
      id: 2,
      total: 99,
      status: "Processing",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        My Orders
      </h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-4"
          >
            <p>Order #{order.id}</p>
            <p>${order.total}</p>
            <p>{order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}