"use server"
import React,{ Suspense } from "react";
import SkeletonCardList from "@/components/Skeleton/AnimeSkeletonList";
import { ListAnime } from "@/components/Anime/ListAnime";
import { Paging } from "@/components/Anime/Paging";

 function page({ params:{key}, searchParams: { page } }) {
  const decode = decodeURI(key)
  return (
    <main className="flex min-h-screen w-full bg-[#010101] flex-col items-center justify-between xl:pt-24 md:pt-12 pt-8 xl:px-16 md:px-8 px-4">
      <section className="w-full max-w-7xl flex flex-col gap-10 max-lg:gap-8 max-md:gap-6 my-12">
        <div className="flex items-center justify-center w-full">
          <h1 className="text-3xl font-bold text-neutral-50">Search Result for {decode}</h1>
        </div>
        <Suspense fallback={<SkeletonCardList />}>
          <ListAnime target={`${key}?page=${page || 1}&perPage=20`} />
        </Suspense>
        <Paging page={page} />
      </section>
    </main>
  );
}
export default page