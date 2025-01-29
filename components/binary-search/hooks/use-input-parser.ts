import { v4 as uuidv4 } from "uuid";
import { Item } from "../models";

export const useInputParser = (): [
  (s: string) => Array<Item>,
  (t: string) => void,
] => {
  const parseSource = (source: string): Array<Item> => {
    console.log("Singal collection constructed");
    const src = String(source)
      .split(",")
      .reduce((a: Array<number>, c) => {
        const numbers = c.match(/\d*\.?\d+/g) || [];
        const sanitized = (numbers || [])
          .map((n) => {
            const t = Number(n);
            return !isNaN(t) ? t : null;
          })
          .filter((x) => !!x);

        a = [...a, ...sanitized] as Array<number>;

        return a;
      }, []);

    const unique = [...(new Set(src) as any)];

    const items = unique
      .sort((a, b) => a - b)
      .map((n, i) => {
        return {
          id: uuidv4(),
          value: n,
          isActive: true,
          isMiddle: false,
          isNeedle: false,
          isStart: false,
          isEnd: false,
        } as Item;
      });

    return items;
  };

  const parseTarget = (target: string) => {
    const [tar] = (String(target).match(/\d*\.?\d+/g) || [])
      .map((n) => {
        const t = Number(n);
        return !isNaN(t) ? t : null;
      })
      .filter((x) => !!x);

    return tar as number;
  };

  return [parseSource, parseTarget];
};
