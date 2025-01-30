"use client";

import SortDataHeader from "../shared/sort-data-header";
import BSInput from "./input";
import BSMainContainer from "./main";
import { BSContext, getState } from "./state";

const BinarySearchMain = () => {
  return (
    <BSContext.Provider value={getState()}>
      <div className="border-slate-800 shadow-lg bg-slate-300  rounded-lg p-5">
        <SortDataHeader>Binary Search</SortDataHeader>
        <BSInput />
        <BSMainContainer />
      </div>
    </BSContext.Provider>
  );
};

export default BinarySearchMain;
