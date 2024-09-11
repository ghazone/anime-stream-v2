
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import BannerCard from './BannerCard'
// import BannerCard from './BannerCard'

const Banner = ({ anime }) => {
    
    return (
        <Carousel
            className="w-full h-full"
        >
            <CarouselContent>
                {anime && anime?.map((anime, index) => (
                    <CarouselItem key={anime.id}>
                        <BannerCard anime={anime} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export default Banner