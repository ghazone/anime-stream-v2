
import React from 'react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const BannerCard = ({ anime }) => {
    const { id, title, description, genres, type, cover } = anime
    return (
        <div className='sm:h-[72vh] h-[60vh] w-full relative'>
            <Image
                src={cover}
                alt={title.english}
                loading="lazy"
                quality={100}
                width={900}
                height={900}
                className="rounded-lg h-full w-full object-cover place-content-center"
            />
            <div className='flex flex-col inset-0 bg-gradient-to-t from-[#010101] to-[#01010110] absolute justify-between'>
                <div></div>
                <div className='flex flex-col sm:items-start items-center sm:gap-4 max-w-3xl gap-3 lg:px-6 px-4'>
                    <h4 className='lg:text-2xl sm:text-start text-center text-xl font-medium text-neutral-50'>{title.english}</h4>
                    <div className='flex gap-3 flex-wrap'>
                        {genres.map((lst, index) => {
                            return <Badge key={index} variant={"destructive"}>{lst.toUpperCase()}</Badge>
                        })}
                        <Badge variant={"secondary"} >{type}</Badge>
                    </div>
                    <div className='sm:block hidden'>
                        <p className='text-balance sm:text-[15px] text-sm md:line-clamp-4 line-clamp-1 text-neutral-300'>{description}</p>
                    </div>
                    <Button variant={"default"} asChild={true} size={'sm'}>
                        <Link href={`anime/${id}`}>See details</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default BannerCard