import Link from "next/link";
export default function PageNotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400 text-center px-4">
      <div className="max-w-md">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-2xl font-semibold mb-2">Page Not Found</p>
        <p className="text-gray-600 mb-6">
          Sorry, the page you’re looking for doesn’t exist.
          </p>
        <Link href="/">
        <button className="border-2px bg-cyan-500 w-20 h-10 cursor-pointer rounded-3xl">
          Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}
