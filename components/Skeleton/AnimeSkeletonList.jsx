// import AnimeSkeleton from "@/app/components/Skeleton/AnimeSkeleton"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import SkeletonCard from "./AnimeSkeleton";

const SkeletonCardList = () => {
  return (
    <Carousel className="w-full flex flex-col overflow-x-hidden lg:gap-6 gap-4 ">
      <CarouselContent>
        {new Array(5).fill(1).map((item, index) => {
          return (
            <CarouselItem
              key={index}
              className={"lg:basis-1/5 md:basis-1/4 sm:basis-1/3 basis-2/3"}
            >
              <SkeletonCard />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default SkeletonCardList;
