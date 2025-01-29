"use client";

import BinarySearchMain from "../binary-search/binary-search-main";

const BinarySearch = () => {
  return (
    <div>
      <h1>Understanding Binary Search Visually</h1>
      <h3>Divide, Conquer,The The Art of Halving</h3>

      <div>
        <p>
          Binary search is an efficient algorithm for finding a target value in
          a sorted array. It works by repeatedly dividing the search space in
          half:
        </p>
        <ul>
          <li>Start with the middle element of the array.</li>
          <li>If the middle element matches the target, return its index.</li>
          <li>
            If the target is smaller, search the left half; if it's larger,
            search the right half.
          </li>
          <li>
            Repeat until the target is found or the search space is empty.
          </li>
        </ul>
        <p>
          You can explore the following tool to gain a deeper understanding of
          the algorithm. It allows you to generate a random dataset or input
          your own data to test its functionality. Enjoy experimenting! 🚀
        </p>
        <BinarySearchMain />
      </div>
    </div>
  );
};

export default BinarySearch;
