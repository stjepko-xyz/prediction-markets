import { Skeleton } from "@/components/ui/skeleton";
export function EventCardSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
      {new Array(20).fill(null).map((_, index) => (
        <div key={index} className="space-y-8">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      ))}
    </div>
  );
}
export default EventCardSkeleton;
