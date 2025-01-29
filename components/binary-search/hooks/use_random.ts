import { useEffect, useState } from "react";

export const useRandom = (len: number = 100): [string, string, () => void] => {
  const [sourceStr, setSourceStr] = useState<string>("");
  const [targetStr, setTargetStr] = useState<string>("");

  useEffect(() => {
    regenerate();
  }, [len]);

  const getRandomCol = () => {
    const array = Array.from({ length: len }, () =>
      Math.floor(Math.random() * 1000)
    );
    const searchNum = array[Math.floor(Math.random() * len)];

    return [array, searchNum];
  };

  const regenerate = () => {
    const [col, tar] = getRandomCol();
    setSourceStr(col.toString());
    setTargetStr(String(tar));
  };

  return [sourceStr, targetStr, regenerate];
};
