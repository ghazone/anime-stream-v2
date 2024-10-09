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
  if (id == 173694) episodes = "hazurewaku-no-joutai-ijou-skill-de-saikyou-ni-natta-ore-ga-subete-wo-juurin-suru-made";
  if (id == 166477) episodes = "megami-no-cafe-terrace-2nd-season";
  if (id == 154412) episodes = "megami-no-cafe-terrace";
  if (id == 166700) episodes = "tasogare-out-focus";
  if (id == 117074) episodes = "isekai-quartet-movie-another-world";
  const episode = await episodeFetcher(episodes);
  // console.log(episode.length)
  return (
    <div className="h-80 scrollbar overflow-y-auto pr-5">
      <Accordion type="single" collapsible className="w-full">
        {episode?.length > 0 ? (
          episode?.map((link, index) => {
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
