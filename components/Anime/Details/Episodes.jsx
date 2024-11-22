import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Player } from "@/components/Anime/Details/Player";
import { episodeDetails, episodeFetcher, episodeServer } from "@/lib/utils";
import FIframe from "@/components/FIframe";

export const EpisodeDetail = async ({ id }) => {
  const detail = await episodeDetails(id);
  // const detail = await episodeServer(id)
  // console.log(id)
  // console.log(detail)
  return (
    <div>
      <Player link={detail.sources} refs={detail.headers.Referer} />
      {/* <iframe src={detail[1].url} frameorder="0" height={"100%"} width={"100%"} className="aspect-video"></iframe> */}
      {/* <FIframe src={detail[3].url} /> */}
    </div>
  );
};

export async function Episodes({ episodes, id }) {
  // console.log(episode.length)
  return (
    <div className="h-80 scrollbar overflow-y-auto pr-5">
      <Accordion type="single" collapsible className="w-full">
        {episodes?.length > 0 ? (
          episodes?.map((link) => {
            return (
              <AccordionItem value={link.id} key={link.number}>
                <AccordionTrigger>Episode {link.number}</AccordionTrigger>
                <AccordionContent>
                  <EpisodeDetail id={link.id} />
                </AccordionContent>
              </AccordionItem>
            );
          })
        ) : (
          <p>Episode not found</p>
        )}
      </Accordion>
    </div>
  );
}
