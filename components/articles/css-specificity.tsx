"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CssCalculator from "../css-calculator/ccs-calculator";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { CssResultEvent } from "@/models/data.models";
import Result from "../css-calculator/result";

const CssSpecificity = () => {
  const [selectors, setSelectors] = useState([{ id: 1, total: 0 }]);
  const [resCol, setResCol] = useState<Array<CssResultEvent>>([]);

  const addSelector = () => {
    setSelectors((s) => [...s, { id: s.length + 1, total: 0 }]);
  };

  const closeHandler = (selector: { id: number }) => {
    setResCol((col) => col.filter((c) => c.id != selector.id));
    setSelectors((all) => all.filter((s) => s.id != selector.id));
  };

  const changeHandler = (e: CssResultEvent) => {
    setResCol((col) => {
      const excluded = col.filter((c) => c.id != e.id);
      const res = [...excluded, e].sort((a, b) => +b.value - +a.value);
      return res;
    });
  };

  return (
    <div>
      <h1>CSS Specificity Calculator</h1>
      <div>
        <p>
          When working with CSS, it's common to encounter situations where
          multiple selectors are applied to the same element, leading to
          confusion about which selector takes precedence. Understanding CSS
          specificity is key to resolving these conflicts.
        </p>
        <p>
          The specificity of a CSS selector determines how "specific" it is, and
          in turn, how likely it is to be applied. By calculating the
          specificity value of a given selector, we can easily determine which
          rule will override another.
        </p>
        <h4>CSS Specificity Hierarchy</h4>
        <p>
          1 . Inline Styles: These have the highest specificity and will
          override other styles, except for those marked as !important.
        </p>
        <p>2 . IDs: An ID selector</p>
        <p>
          3 . Classes, Attributes, and Pseudo-Classes: These selectors share the
          same level of specificity.
        </p>
        <p>
          4 . HTML Tags and Pseudo-Elements: These have the lowest specificity.
        </p>
        <p>
          <b>
            make this process easier, you can use a tool that calculates the
            specificity value for any given selector. You can even add multiple
            selectors by pressing the "+" button. The result section will
            display the selectors in order of specificity, making it clear which
            one takes precedence. Understanding this hierarchy can help
            eliminate confusion and make styling more predictable and
            manageable.
          </b>
        </p>
      </div>
      <div>
        <Result res={resCol} />
      </div>
      <div>
        <div className="flex justify-start">
          <div
            onClick={addSelector}
            className="border border-slate-400 px-6 cursor-pointer rounded-md transition-colors hover:bg-slate-200"
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        {selectors.map((s, i) => (
          <div key={s.id} className="py-3">
            <CssCalculator
              id={s.id}
              change={(e) => changeHandler(e)}
              showClose={i != 0}
              close={() => closeHandler(s)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CssSpecificity;
