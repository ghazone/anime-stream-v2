"use client"

import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select"
import Video from "@/components/Anime/Details/Video"
import { useState } from "react"

export const Player = ({ link }) => {
    const [resolution,setResolution] = useState(link[0].url)
    // console.log(resolution)
    return (
    <div className="w-full aspect-video" >
        <Video src={resolution} />
        <Select onValueChange={ value => setResolution(value) }>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose Resolution" />
          </SelectTrigger>
          <SelectContent>
            {link.length > 0 && link.map((url,key)=>{
              return(
                <SelectItem value={url.url} key={key}>{url.quality}</SelectItem>
              )
            })
            }
          </SelectContent>
        </Select>
    </div>
  )
}