const SkeletonCard = () => {
    return (

        <div role="status" className="max-w-sm p-4 border shadow animate-pulse md:p-6 border-gray-600 rounded-lg">
            {/* Image display skeleton */}
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-700"></div>

            {/* Title skeleton */}
            <div className="h-2.5 rounded-full bg-gray-700 mb-4"></div>

            {/* Description skeleton */}
            <div className="h-2 rounded-full bg-gray-700 mb-2.5"></div>
            <div className="h-2 rounded-full bg-gray-700"></div>
            <span className="sr-only">Loading...</span>
        </div>

    )
}
export default SkeletonCard