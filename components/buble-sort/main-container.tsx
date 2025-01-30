"use client";

import VisualSortWrapper from "../shared/visual-sort-wrapper";
import BubbleSortImpl from "./buble-sort-impl";

const BubbleSortContainer = () => {
  return (
    <VisualSortWrapper title="Bubble Sort">
      <BubbleSortImpl />
    </VisualSortWrapper>
  );
};

export default BubbleSortContainer;
