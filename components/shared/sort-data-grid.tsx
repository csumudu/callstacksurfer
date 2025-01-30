"use client";

import { FC } from "react";
import { Item } from "../binary-search/models";
import SortItem from "./sort-item";

const SortDataGrid: FC<{ itemList: Array<Item> }> = ({ itemList }) => {
  return (
    <div className="bg-slate-900 p-3 mt-3 rounded-lg">
      <div className="text-slate-300">Source Collection:</div>
      <div>
        <div className="relative pb-3 grid gap-1 grid-cols-[repeat(auto-fit,minmax(4rem,1fr))]">
          {(itemList || []).map((v, i) => {
            return <SortItem key={v?.id} item={v} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SortDataGrid;
