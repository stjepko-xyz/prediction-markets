import { EventCardSkeleton, Events } from "@/components/index";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="flex">
      <Suspense fallback={<EventCardSkeleton />}>
        <Events />
      </Suspense>
    </main>
  );
}
