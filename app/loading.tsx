export default function Loading() {
  return (
    <div className="min-h-screen bg-primary-950 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-primary-800 border-t-accent-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-500 text-sm tracking-wide">Loading The Obsidian Hall...</p>
      </div>
    </div>
  )
}
