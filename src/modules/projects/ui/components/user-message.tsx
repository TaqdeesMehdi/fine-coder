import { Card } from "@/components/ui/card";

interface Props {
  content: string;
}
export const UserMessage = ({ content }: Props) => {
  return (
    <div className="flex justify-end pr-2 pl-10 pb-4">
      <Card className="rounded-lg p-3 shadow-none  border-none bg-muted break-words max-w-[80%]">
        {content}
      </Card>
    </div>
  );
};
