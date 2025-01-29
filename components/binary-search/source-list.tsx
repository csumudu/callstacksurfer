"use client";

import { FC, useDeferredValue, useEffect, useState } from "react";
import { CtrlActions } from "../shared/play-controls";
import { Step, useBinary } from "./hooks/use-binary";
import { useInputParser } from "./hooks/use-input-parser";
import NumberItem from "./item";
import { Item } from "./models";
import { useBsState } from "./state";

const SourceList: FC<{
  source: string;
  target: string;
  action: CtrlActions | undefined;
  instructionsSet: (s: Array<Step>) => void;
}> = ({ source, target, action, instructionsSet }) => {
  const [viewItemList, setViewItemList] = useState<Array<Item>>([]);
  const { setAction } = useBsState();

  const [parseSource, parseTarget] = useInputParser();
  const [foundIndex, stepsCol, updatedList, search] = useBinary();

  const itemList = useDeferredValue(viewItemList);

  useEffect(() => {
    const res = parseSource(source);

    setViewItemList(res);
  }, [source]);

  useEffect(() => {
    if (action == CtrlActions.PLAY) {
      search(itemList);
    }
  }, [action]);

  useEffect(() => {
    if (foundIndex !== undefined) {
      setAction(undefined);
    }
  }, [foundIndex]);

  useEffect(() => {
    instructionsSet(stepsCol);
  }, [stepsCol]);

  return (
    <div>
      <div className="relative pb-3 grid gap-1 grid-cols-[repeat(auto-fit,minmax(4rem,1fr))]">
        {(itemList || []).map((v, i) => {
          return <NumberItem key={v.id} item={v} />;
        })}
      </div>
      {foundIndex ? (
        <div className="p-2 rounded border-2 border-slate-700 text-pink-500 font-bold bg-black">
          {foundIndex >= 0
            ? `Value ${target} Found in Position : ${foundIndex + 1}`
            : "Value Not Found"}
        </div>
      ) : null}
    </div>
  );
};

export default SourceList;
