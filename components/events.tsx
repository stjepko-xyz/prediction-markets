import { getEvents } from "@/lib/events";
import EventCard from "./event-card";

const Events = async () => {
  const events = await getEvents();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
      {events?.map((event, index) => (
        <EventCard
          key={index}
          id={event?.ticker}
          title={event?.title}
          image={event?.imageUrl}
          markets={event?.markets}
        />
      ))}
    </div>
  );
};

export default Events;
