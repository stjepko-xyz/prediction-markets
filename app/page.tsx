import { EventCardSkeleton, Events } from "@/components/index";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex">
      <Suspense fallback={<EventCardSkeleton />}>
        <Events />
      </Suspense>
    </main>
  );
}
