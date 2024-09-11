import React, { Fragment } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Link from 'next/link'
import CarouselCard from './CarouselCard'
import { slugify } from '@/lib/utils'

const AnimeCarousel = ({ anime, title }) => {
  // Function to Convert title to slug

  const slug = slugify(title)
  // console.log(slug)
  return (
    <Fragment>
      <div className='flex flex-col '>
        <Carousel
          className="w-full flex flex-col lg:gap-6 gap-4 "
          opts={{ dragFree: true }}
        >

          <div className='flex w-full justify-between items-center '>
            <h2 className='lg:text-4xl text-2xl  text-neutral-100 font-medium'>{title}</h2>
            <Link href={slug} className=' md:text-lg text-[1rem] transition-all duration-300 text-neutral-400 hover:text-neutral-200' >See all</Link>
          </div>

          <CarouselContent>
            {anime.map((anime, index) => (
              <CarouselItem key={anime.id} className={'lg:basis-1/5 md:basis-1/4 sm:basis-1/3 basis-2/3'}>
                <CarouselCard anime={anime} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Fragment>
  )
}

export default AnimeCarousel