/* eslint-disable @next/next/no-img-element */
import React from "react";

export type SalesProps = {
  name: string;
  email: string;
  saleAmount: string;
};

const SalesCard = (props: SalesProps) => {
  return (
    <div className="flex flex-wrap justify-between gap-3 ">
      <section className="flex justify-between gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1 ">
          <img
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${props.name}`}
            alt="avatar"
            width={200}
            height={200}
          />
        </div>
        <div className="text-sm">
          <p>{props.name}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400 ">
            <p>{props.email}</p>
          </div>
        </div>
      </section>
          <p>{props.saleAmount}</p>
    </div>
  );
};

export default SalesCard;
