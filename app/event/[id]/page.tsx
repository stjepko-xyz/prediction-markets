import { Markets, EventHeader, OrderForm } from "@/components/index";
import { Card } from "@/components/ui/card";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <Suspense>
          <EventHeader eventId={id} />
        </Suspense>
        <Suspense>
          <Markets eventId={id} />
        </Suspense>
      </div>
      <div className="order-panel w-full lg:w-80 shrink-0 lg:sticky lg:top-20 lg:self-start">
        <Card className="p-4">
          <OrderForm />
        </Card>
      </div>
    </main>
  );
}
