"use client";

import WithResults from "../css-calculator/with-result";

const CssSpecificity = () => {
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
            Make this process easier, you can use a tool that calculates the
            specificity value for any given selector. You can even add multiple
            selectors by pressing the "+" button. The result section will
            display the selectors in order of specificity, making it clear which
            one takes precedence. Understanding this hierarchy can help
            eliminate confusion and make styling more predictable and
            manageable.
          </b>
        </p>
      </div>
      <WithResults />
    </div>
  );
};

export default CssSpecificity;
