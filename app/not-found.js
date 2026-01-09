import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold mb-4">404 - Not Found</h2>
      <p className="text-xl mb-8">Could not find the requested short URL</p>
      <Link 
        href="/"
        className="bg-amber-200 hover:bg-amber-300 px-6 py-3 rounded-lg font-bold"
      >
        Return Home
      </Link>
    </div>
  )
}
