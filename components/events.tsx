import { getEvents } from "@/lib/events";
import { Event } from "@/lib/types";
import EventCard from "./event-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

interface EventsProps {
  cursor?: number;
}

const Events = async ({ cursor = 0 }: EventsProps) => {
  const { events, cursor: nextCursor } = await getEvents(cursor);
  const hasMore = events.length > 0 && nextCursor > cursor;
  const hasPrevious = cursor > 0;

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {events?.map((event: Event, index: number) => (
          <EventCard
            key={index}
            id={event?.ticker}
            title={event?.title}
            image={event?.imageUrl}
            markets={event?.markets}
            volume={event?.volume}
          />
        ))}
      </div>

      {(hasPrevious || hasMore) && (
        <Pagination>
          <PaginationContent>
            {hasPrevious && (
              <PaginationItem>
                <PaginationPrevious
                  href={`/?cursor=${Math.max(0, cursor - 20)}`}
                />
              </PaginationItem>
            )}
            {hasMore && (
              <PaginationItem>
                <PaginationNext href={`/?cursor=${nextCursor}`} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default Events;
