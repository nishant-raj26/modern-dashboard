import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
};

const Card = (props: CardProps) => {
  return (
    <CardContent>
      <section className="flex gap-2 justify-between">
        <p className="text-sm"> {props.label} </p>
        <props.icon className="text-gray-400 h-4 w-4 " />
      </section>
      <section className="flex flex-col gap-1 ">
        <h1 className="text-2xl font-semibold "> ${props.amount} </h1>
        <p className="text-xs text-gray-500"> {props.description} </p>
      </section>
    </CardContent>
  );
};

export const CardContent = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow ",
        props.className
      )}
    />
  );
};

export default Card;
