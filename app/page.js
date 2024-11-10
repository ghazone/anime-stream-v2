import { Suspense } from "react";
import BannerSkeleton from "@/components/Skeleton/BannerSkeleton";
import BannerWrapper from "@/components/Anime/BannerWrapper";
import CarouselWrapper from "@/components/Anime/CarouselWrapper";
import SkeletonCardList from "@/components/Skeleton/AnimeSkeletonList";

export default function Page() {
    
    return (
        <main className="flex min-h-screen w-full bg-[#010101] flex-col items-center justify-between xl:pt-24 md:pt-12 pt-8 xl:px-16 md:px-8 px-4">
            <section className="w-full max-w-7xl flex flex-col my-12">
                <Suspense fallback={<BannerSkeleton />}>
                    <BannerWrapper target={'top-airing'} />
                </Suspense>
            </section>
            <section className="w-full max-w-7xl flex flex-col my-12">
                <Suspense fallback={<SkeletonCardList />}>
                    <CarouselWrapper title={'On-going'} target={'recent-episodes'} />
                </Suspense>
            </section>
            <section className="w-full max-w-7xl flex flex-col my-12">
                <Suspense fallback={<SkeletonCardList />}>
                    <CarouselWrapper title={'Trending'} target={'top-airing'} />
                </Suspense>
            </section>

        </main>
    );
}
