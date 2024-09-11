import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Player } from "@/components/Anime/Details/Player"
import { episodeDetails, episodeFetcher } from "@/lib/utils"
  
  export const EpisodeDetail = async (id) => {
    const detail = await episodeDetails(id)
    // console.log(id)
    // console.log(detail)
    return (
      <div className=" max-w-screen-md">
        <Player link={detail} />
      </div>
    )
  }
  
  export async function Episodes({episodes}) {
    const episode = await episodeFetcher(episodes)
    // console.log(episode.length)
    return (
      <div className="h-80 scrollbar overflow-y-auto pr-5">

      <Accordion type="single" collapsible className="w-full">
        {episode?.length > 0 ? episode?.map((link,index)=>{
          return (
            <AccordionItem value={link.id} key={link.number}>
              <AccordionTrigger>Episode {link.number}</AccordionTrigger>
              <AccordionContent>
                <EpisodeDetail id={link.id}/>
              </AccordionContent>
            </AccordionItem>  
          )
        })
        :
        <p>Episode not found</p>
      }
      </Accordion>
      </div>
    )
  }
  