import { getEventById } from "@/lib/events";
import MarketCard from "./market-card";

interface Market {
  ticker?: string;
  yesSubTitle: string;
  yesAsk?: number | string;
  yesBid?: number | string;
  noSubTitle?: string;
  noAsk?: number | string;
  noBid?: number | string;
}

interface MarketsProps {
  eventId: string;
}

const Markets = async ({ eventId }: MarketsProps) => {
  const event = await getEventById(eventId, true);
  return (
    <div className="flex flex-col mt-8">
      {event?.markets?.map((market: Market, index: number) => (
        <MarketCard
          key={market.ticker ?? index}
          id={market.ticker ?? `market-${index}`}
          title={market.yesSubTitle}
          yesAsk={market.yesAsk}
          yesBid={market.yesBid}
          noAsk={market.noAsk}
          noBid={market.noBid}
          noSubTitle={market.noSubTitle}
        />
      ))}
    </div>
  );
};

export default Markets;
