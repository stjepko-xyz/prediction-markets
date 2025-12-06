import { Markets, EventHeader } from "@/components/index";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="flex gap-8">
      <div className="flex-1">
        <Suspense>
          <EventHeader eventId={id} />
        </Suspense>
        <Suspense>
          <Markets eventId={id} />
        </Suspense>
      </div>
      <div className="order-panel w-80 shrink-0">
        <Card className="p-4">
          <Button variant={"secondary"}>Trade</Button>
        </Card>
      </div>
    </main>
  );
}
