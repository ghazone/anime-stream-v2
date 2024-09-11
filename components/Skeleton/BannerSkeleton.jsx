import { Fragment } from "react"

const BannerSkeleton = () => {
    return (
        <Fragment>
            {/* Image display skeleton */}
            < div className="flex items-center justify-center h-[65vh] mb-4 rounded bg-gray-700" ></div >
            <span className="sr-only">Loading...</span>
        </Fragment>

    )
}
export default BannerSkeleton