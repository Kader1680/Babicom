type Props = {
  children: React.ReactNode;
};

export default function Button({
  children,
}: Props) {
  return (
    <button className="bg-black text-white px-5 py-2 rounded hover:opacity-90">
      {children}
    </button>
  );
}