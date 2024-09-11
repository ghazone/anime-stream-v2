// import { anilistFetcher } from '@/app/utils/dataGet';
import { anilistFetcher } from '@/lib/utils';
import React from 'react'
import AnimeCarousel from './Carousel';

const CarouselWrapper = async ({title,target}) => {
    const data = await anilistFetcher(target);
    return (
        <AnimeCarousel anime={data.results} title={title} />
    )
}

export default CarouselWrapper