"use client"
import { useRef } from 'react'

const FIframe = ({ src }) => {
    console.log(src)
    const iframeRef = useRef(null)
    const handleFullscreen = () => {
        if (iframeRef.current) {
            if (iframeRef.current.requestFullscreen) {
                iframeRef.current.requestFullscreen();
            } else if (iframeRef.current.mozRequestFullScreen) { // Firefox
                iframeRef.current.mozRequestFullScreen();
            } else if (iframeRef.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
                iframeRef.current.webkitRequestFullscreen();
            } else if (iframeRef.current.msRequestFullscreen) { // IE/Edge
                iframeRef.current.msRequestFullscreen();
            }
        }   
    }
    const handleExit = ()=>{
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }

    return (
        <div className='relative w-full h-full'>
            <iframe ref={iframeRef} src={src} height={"100%"} width={"100%"} frameborder="0" className='aspect-video'></iframe>
            <button onClick={handleFullscreen} className='px-6 py-3 absolute bottom-0 right-0 bg-red-500 text-white'>FullScreen</button>
            <button onClick={handleExit} className='px-6 py-3 absolute bottom-0 right-40 bg-red-500 text-white'>Exit</button>
        </div>
    )
}

export default FIframe