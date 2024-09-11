// import AnimeSkeleton from "@/app/components/Skeleton/AnimeSkeleton"
import SkeletonCard from "./AnimeSkeleton"

const SkeletonCardList = ()=>{
    return(
        <div className="grid grid-cols-5 gap-5" >
            {new Array(5).fill(1).map((item, index)=>{
                return <SkeletonCard key={index}/>
            })}
        </div>
    )
}
export default SkeletonCardList