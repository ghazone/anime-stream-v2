// import { anilistFetcher } from '@/app/utils/dataGet';
import { anilistFetcher } from '@/lib/utils';
import React from 'react'
import Banner from './Banner';

const BannerWrapper = async ({ target }) => {
    const data = await anilistFetcher(target);
    return (
        <Banner anime={data.results} />
    )
}

export default BannerWrapper