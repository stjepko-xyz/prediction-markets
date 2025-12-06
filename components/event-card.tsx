import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  markets: Array<{
    name: string;
    probability: number;
  }>;
}

const EventCard = ({ title, markets }: EventCardProps) => {
  return (
    <Card className="p-4 gap-4 w-full justify-between">
      {title && <h5 className="line-clamp-2">{title}</h5>}
      {markets && (
        <div className="space-y-2">
          {markets.map((market, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4"
            >
              <span>{market?.name}</span>
              <div className="flex items-center gap-2">
                <h5>{market?.probability}%</h5>
                <div className="flex">
                  <ButtonGroup>
                    <Button variant={"outline"}>Yes</Button>
                    <Button variant={"outline"}>No</Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default EventCard;
