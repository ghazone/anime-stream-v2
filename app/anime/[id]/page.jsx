// import { anilistFetcher } from "@/app/utils/dataGet";
import { anilistFetcher, slugify } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {Episodes} from "@/components/Anime/Details/Episodes";

export default async function Page({ params: { id } }) {
    const data = await anilistFetcher(`info/${id}`);
    const { cover, title, image, description, status, genres, totalEpisodes, releaseDate } = data
    const slug = slugify(title.romaji)
    
    return (
        <main className="flex min-h-screen w-full bg-[#010101] flex-col items-center justify-between">
            <section className="w-full relative flex flex-col xl:p-16 md:p-8 p-4 mb-12">
                <div className="absolute z-0 top-0 left-0 right-0 bottom-0 ">
                    <Image
                        src={cover}
                        alt={title.romaji}
                        loading="lazy"
                        quality={100}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-bl from-gray-900/80 to-zinc-900"></div>
                </div>
                <div className="max-w-7xl relative">
                    <div className="flex lg:flex-row flex-col lg:gap-10 gap-8 items-center">
                        <Image
                            src={image}
                            alt={title.romaji}
                            loading="lazy"
                            width={300}
                            height={300}
                            className="rounded-lg aspect-[3/4] object-cover"
                        />
                        <div className="flex flex-col gap-5 lg:max-w-[60%] items-start">
                            <div className="flex flex-col gap-3 items-start">
                                <h1 className="text-neutral-50 md:text-3xl text-2xl font-medium">{title.romaji}</h1>
                                <div className="flex gap-2 flex-wrap">
                                    {genres.map((lst, index) => {
                                        return <Badge key={index} >{lst.toUpperCase()}</Badge>
                                    })}
                                    <Badge >{status}</Badge>
                                    <Badge variant={'destructive'} >{releaseDate}</Badge>
                                </div>
                            </div>
                            <p className="text-neutral-300 text-sm">Total Episodes: {totalEpisodes}</p>
                            <p className="text-neutral-300 lg:text-sm text-xs">{description}</p>
                            <Button variant={'outline'}>Watch Now</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full relative flex flex-col xl:p-16 md:p-8 p-4 mb-12">
                <Episodes episodes={slug}/>
            </section>
        </main>
    );
}