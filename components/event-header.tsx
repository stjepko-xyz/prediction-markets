import Image from "next/image";
import { getEventById } from "@/lib/events";

const EventHeader = async ({ eventId }: { eventId: string }) => {
  const event = await getEventById(eventId);
  console.log(event);
  return (
    <div className="sticky top-0 bg-background flex items-center gap-4 py-4 z-10 border-b">
      <Image
        src={event?.imageUrl}
        alt={event?.title}
        width={80}
        height={80}
        className="rounded-md object-cover"
      />
      <h2 className="text-2xl font-semibold">{event?.title}</h2>
    </div>
  );
};

export default EventHeader;
