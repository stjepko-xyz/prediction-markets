import { EventCard } from "@/components/index";

export default function Home() {
  const events = [
    {
      title: "Who will win competetion X?",
      markets: [
        { name: "Competitor A", probability: 71 },
        { name: "Competitor B", probability: 29 },
      ],
    },
    {
      title: "What will be the outcome of election Z?",
      markets: [
        { name: "Yes", probability: 45 },
        { name: "No", probability: 55 },
      ],
    },
    {
      title: "Will event Y happen?",
      markets: [
        { name: "Yes", probability: 45 },
        { name: "No", probability: 55 },
      ],
    },
    {
      title: "Will event Y happen?",
      markets: [
        { name: "Yes", probability: 45 },
        { name: "No", probability: 55 },
      ],
    },
    {
      title: "Will event Y happen?",
      markets: [
        { name: "Yes", probability: 45 },
        { name: "No", probability: 55 },
      ],
    },
    {
      title: "Will event Y happen?",
      markets: [
        { name: "Yes", probability: 45 },
        { name: "No", probability: 55 },
      ],
    },
  ];
  return (
    <main className="flex">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {events.map((event, index) => (
          <EventCard key={index} title={event.title} markets={event.markets} />
        ))}
      </div>
    </main>
  );
}
