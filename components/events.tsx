import { getEvents } from "@/lib/events";
import EventCard from "./event-card";

const Events = async () => {
  const events = await getEvents();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
      {events?.map((event, index) => (
        <EventCard key={index} title={event.title} markets={event.markets} />
      ))}
    </div>
  );
};

export default Events;
