import { FC, useEffect } from "react";
import { Item } from "../binary-search/models";
import { twMerge } from "tailwind-merge";

const SortItem: FC<{ item: Item }> = ({ item }) => {
  let isIgnored = "";
  let flipA = "";
  let flipB = "";

  isIgnored = item.isActive ? "" : "bg-slate-600 text-slate-500";

  flipA = item.isFlipA ? "animate-hflip border-pink-700" : "";
  flipB = item.isFlipB ? "animate-hflip border-green-600" : "";
  const isSorted = item.isSorted ? "bg-red-600" : "";

  return (
    <div
      className={twMerge(
        "z-40 relative flex  justify-center items-center border border-slate-700 p-2 text-slate-500 ",
        isIgnored,
        flipA,
        flipB,
        isSorted
      )}
    >
      {item.value}
    </div>
  );
};

export default SortItem;
