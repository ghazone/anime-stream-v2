import React from 'react'
import Video from './Video'

const ProxyPlayer = ({ src,refs }) => {
    let res = JSON.parse(refs)
    console.log(src)
    console.log(JSON.stringify(res))
    const url = process.env.NEXT_PUBLIC_SERVICE_API
    const player = `/m3u8-proxy?url=${encodeURIComponent(src)}&headers=${encodeURIComponent(JSON.stringify(res))}`
    // const res = `${url}${player}`
    return (
        // <video src={`${url}${player}`} controls className='w-full'></video>
        <Video src={`${url}${player}`} />
    )
}

export default ProxyPlayer