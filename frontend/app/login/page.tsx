export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="w-full max-w-md rounded-lg border p-6 space-y-4">
        <h1 className="text-2xl font-bold">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded p-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded p-3"
        />

        <button className="w-full rounded bg-black text-white p-3">
          Login
        </button>
      </form>
    </div>
  );
}