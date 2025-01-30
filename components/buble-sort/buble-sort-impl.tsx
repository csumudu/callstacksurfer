"use client";

import { useState, useEffect, useDebugValue, useDeferredValue } from "react";
import { useInputParser } from "../binary-search/hooks/use-input-parser";
import { Item } from "../binary-search/models";
import SortDataGrid from "../shared/sort-data-grid";
import { useSortState } from "../shared/sort-shared-state";
import { CtrlActions } from "../shared/play-controls";
import { useBubble } from "./hooks/use-bubble";

const BubbleSortImpl = () => {
  const [itemList, setItemList] = useState<Array<Item>>([]);
  const defered = useDeferredValue(itemList);

  const { source, playerSelectedAction, setAction } = useSortState();
  const [parseSource] = useInputParser(false);
  const { sort, updateCount } = useBubble();

  useEffect(() => {
    setItemList(parseSource(source));
  }, [source]);

  useEffect(() => {
    if (playerSelectedAction == CtrlActions.PLAY) {
      sort(itemList);
    }
  }, [playerSelectedAction]);

  useEffect(() => {
    if (updateCount == 0) {
      setAction(CtrlActions.NO_ACT);
    }
  }, [updateCount]);

  return (
    <>
      <div>
        <SortDataGrid itemList={defered} />
      </div>
      {updateCount == 0 ? <div>List is Sorted</div> : null}
    </>
  );
};

export default BubbleSortImpl;
