import { getEventById } from "@/lib/events";
import MarketCard from "./market-card";

interface MarketsProps {
  eventId: string;
}

const Markets = async ({ eventId }: MarketsProps) => {
  const event = await getEventById(eventId, true);
  return (
    <div className="flex flex-col mt-8">
      {event?.markets?.map(
        (market: { ticker?: string; yesSubTitle: string }, index: number) => (
          <MarketCard
            key={market.ticker ?? index}
            id={market.ticker ?? `market-${index}`}
            title={market.yesSubTitle}
          />
        )
      )}
    </div>
  );
};

export default Markets;
