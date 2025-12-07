import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = [
  "All",
  "Technology",
  "Science",
  "Politics",
  "Sports",
  "Entertainment",
  "Health",
  "Business",
  "World",
];

const Categories = () => {
  return (
    <div className="flex space-y-2 overflow-x-hidden">
      {categories?.map((category) => (
        <Button disabled key={category} variant="ghost" asChild>
          <Link href="#">{category}</Link>
        </Button>
      ))}
    </div>
  );
};

export default Categories;
