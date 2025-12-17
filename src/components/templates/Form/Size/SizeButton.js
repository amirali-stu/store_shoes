export default function SizeButton({ isPending }) {
  return (
    <button type="submit" disabled={isPending} className="p-4 bg-gray-400">
      {isPending ? "در حال ساخت..." : "ساختن"}
    </button>
  );
}
