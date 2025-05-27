import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  content: string;
  title: string;
  children: ReactNode;
  className?: string;
  href?: string;
}
const InfoCard = ({
  content,
  icon,
  children,
  title,
  className,
  href,
}: Props) => {
  return (
    <Link href={href ? href : "#"}>
      <Card className=" bg-background transition-all duration-500 hover:bg-muted  rounded-2xl px-4 py-4">
        <div className="flex justify-between items-start gap-2 my-2">
          <div className="flex flex-col justify-center items-start">
            <h4>{title}</h4>
          </div>
          <div className={cn("text-white w-fit rounded-full p-3", className)}>
            {icon}
          </div>
        </div>
        <div className="flex justify-between items-center">
          {children}
          <p className="font-bold text-xl my-1">{content}</p>
        </div>
      </Card>
    </Link>
  );
};

export default InfoCard;
