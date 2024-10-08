import { anilistFetcher } from "@/lib/utils";
import React from "react";
import CarouselCard from "./CarouselCard";

export const ListAnime = async ({ target="airing-schedule" }) => {
  console.log(target);
  const data = await anilistFetcher(target);
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6 max-lg:gap-4">
      {data &&
        data?.results.map((anime, key) => {
          return <CarouselCard anime={anime} key={anime.id} />;
        })}
    </div>
  );
};
