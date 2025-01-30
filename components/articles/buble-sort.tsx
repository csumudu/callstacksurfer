import BubbleSortContainer from "../buble-sort/main-container";

const BubleSort = () => {
  return (
    <div>
      <h1>Understanding Bubble Sort Visually</h1>
      <h3>Bubble Sort in Motion: Watch the Magic of Sorting Unfold!</h3>

      <div>
        Bubble Sort is a simple sorting algorithm that repeatedly steps through
        the list, compares adjacent elements, and swaps them if they are in the
        wrong order. This process continues until the list is sorted.
      </div>
      <p>
        <h4>Steps: </h4>
        <ul>
          <li>
            Start from the first element and compare it with the next one.
          </li>
          <li>Swap them if they are in the wrong order.</li>
          <li>Move to the next pair and repeat.</li>
          <li>
            The largest element "bubbles" to the end in each pass. Repeat the
            process for the remaining elements until no swaps are needed.
          </li>
        </ul>
      </p>
      <p>
        You can visualize the Bubble Sort process in the widget below. Try it
        with your own dataset or generate a random dataset to see how the
        algorithm works in action!
      </p>
      <BubbleSortContainer />
    </div>
  );
};

export default BubleSort;
