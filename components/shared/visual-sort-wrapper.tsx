"use client";

import { FC, PropsWithChildren } from "react";
import SortDataHeader from "./sort-data-header";
import SortDataInput from "./sort-data-input";
import { getSortState, SortContext } from "./sort-shared-state";

const VisualSortWrapper: FC<PropsWithChildren & { title: string }> = ({
  children,
  title,
}) => {
  return (
    <div className="border-slate-800 shadow-lg bg-slate-300  rounded-lg p-5">
      <SortContext.Provider value={getSortState()}>
        <SortDataHeader>{title}</SortDataHeader>
        <SortDataInput />
        <div>{children}</div>
      </SortContext.Provider>
    </div>
  );
};

export default VisualSortWrapper;
