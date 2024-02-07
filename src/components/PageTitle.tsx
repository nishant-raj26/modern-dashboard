import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  className?: string;
};

const PageTitle = ({ title, className }: Props) => {
  return <h1 className={cn("font-semibold text-2xl ", className)}>{title}</h1>;
};

export default PageTitle;
