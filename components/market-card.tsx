import { Button } from "@/components/ui/button";

const MarketCard = ({ title }) => {
  return (
    <div className="flex justify-between border-b py-4">
      <h5 className="w-40">{title}</h5>
      <h3>73%</h3>
      <div className="flex gap-4">
        <Button variant={"outline"} size={"lg"}>
          Yes
        </Button>
        <Button variant={"outline"} size={"lg"}>
          No
        </Button>
      </div>
    </div>
  );
};

export default MarketCard;
