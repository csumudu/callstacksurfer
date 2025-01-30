import { Item } from "@/components/binary-search/models";
import { useEffect, useState } from "react";

export const useBubble = () => {
  const [sortedList, setSortedList] = useState<Array<Item>>([]);
  const [updateCount, setUpdateCount] = useState<number>(-1);

  const time = 10;

  const updateAsync = (index: number, a: number, b: number, iter: number) => {
    setUpdateCount((s) => s + 1);
    setTimeout(() => {
      setSortedList((sl) => {
        sl[index + 1].value = a;
        sl[index + 1].isFlipA = true;

        sl[index].value = b;
        sl[index].isFlipB = true;

        queueMicrotask(() => {
          const i = index;
          const next = index + 1;
          sl[next].isFlipA = false;
          sl[i].isFlipB = false;
        });

        return [...sl];
      });
      setUpdateCount((s) => s - 1);
    }, time * iter);
  };

  const sort = (list: Array<Item>) => {
    setUpdateCount(-1);
    let outer = list.length;
    const tmp = [...list];

    while (outer >= 0) {
      for (let index = 0; index < outer; index++) {
        const a = tmp[index];
        if (index + 1 < outer) {
          const b = tmp[index + 1];
          if (a.value > b.value) {
            tmp[index + 1] = a;
            tmp[index] = b;
            updateAsync(index, a.value, b.value, (list.length - outer) * index);
          }
        }
      }
      outer--;
    }

    setSortedList([...list]);
    if (updateCount == -1) {
      setUpdateCount(0);
    }
  };

  return { sort, updateCount };
};
