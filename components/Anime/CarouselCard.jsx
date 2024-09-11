import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

const CarouselCard = ({anime}) => {
    const { id, title, image,  totalEpisodes, episode}= anime
    // console.log(id)
    return (
        <Link href={`anime/${id}`}>
            <Card className={'hover:scale-[0.97] transation-all duration-300'}>
                <CardHeader>
                    <Image
                        src={image}
                        alt={title}
                        loading="lazy"
                        width={150}
                        height={150}
                        className="rounded-lg aspect-[3/4] w-full object-cover"
                    />
                </CardHeader>
                <CardContent className="flex flex-col justify-center">
                    <CardTitle className={'line-clamp-1 md:mb-3 mb-2'}>{title.userPreferred || title.english}</CardTitle>
                    <Badge variant={"destructive"} className={'self-start'} >{episode != null || episode!= undefined ? `Episode ${episode}` : `Total Episodes ${totalEpisodes}`}</Badge>
                </CardContent>
            </Card>
        </Link>
    )
}

export default CarouselCard