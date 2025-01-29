import { FC } from "react";
import { Item } from "./models";
import { twMerge } from "tailwind-merge";

const NumberItem: FC<{ item: Item }> = ({ item }) => {
  const startIndex =
    "before:content-[''] before:absolute before:w-2 before:h-16 before:rounded-md before:bg-green-400 before:-left-[3px] before:-bottom-[1px]";
  const endIndex =
    "before:content-[''] before:absolute before:w-2 before:h-16 before:rounded-md before:bg-orange-400 before:-right-[3px] before:-bottom-[1px]";

  const ignored = "bg-slate-600 text-slate-500";

  const needle = item.isNeedle
    ? "bg-pink-600 text-slate-200 motion-preset-pulse"
    : "text-slate-400";
  const start = !item.isNeedle && item.isStart ? startIndex : "";
  const end = !item.isNeedle && item.isEnd ? endIndex : "";
  const isIgnored = item.isActive ? "" : ignored;
  const isMiddle = item.isMiddle ? "border-purple-500" : "";

  return (
    <div
      className={twMerge(
        "z-40 relative flex  justify-center items-center border p-2",
        start,
        end,
        isIgnored,
        isMiddle,
        needle
      )}
    >
      {item.value}
    </div>
  );
};

export default NumberItem;
