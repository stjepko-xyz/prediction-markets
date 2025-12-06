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
    <div className="categories flex">
      {categories?.map((category) => (
        <Button key={category} variant="ghost" asChild>
          <Link href="#" className=" font-semibold">
            {category}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default Categories;
