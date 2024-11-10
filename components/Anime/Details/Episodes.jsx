import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Player } from "@/components/Anime/Details/Player";
import { episodeDetails, episodeFetcher } from "@/lib/utils";

export const EpisodeDetail = async (id) => {
  const detail = await episodeDetails(id);
  // console.log(id)
  // console.log(detail)
  return (
    <div>
      <Player link={detail} />
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
                <AccordionContent className="p-5">
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
