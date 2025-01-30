import { Article, ArticleType } from "@prisma/client";
import { lazy } from "react";

export interface ArticleExtended extends Article {
  articleType: ArticleType;
}

export const ArticleComponentMap: any = {
  CssSpecificity: lazy(() => import("../components/articles/css-specificity")),
  BinarySearch: lazy(() => import("../components/articles/binary-search")),
  BubleSort: lazy(() => import("../components/articles/buble-sort")),
};

export enum FragName {
  InLineStyle = "Inline Styles",
  IDs = "ID's",
  Classes = "Classes",
  Attributes = "Attributes",
  PseudoClasses = "Pseudo Classes",
  Tags = "Tags",
  PseudoElements = "PseudoElements",
}

export interface CSSFragment {
  name: FragName;
  count: number;
  fragments: Array<string>;
}

export enum priorityKeys {
  total = "total",
  selector = "selector",
  pOne = "pOne",
  pTwo = "pTwo",
  pThree = "pThree",
  pFour = "pFour",
}

export interface CssResultEvent {
  id: number;
  selector: string;
  value: string;
}
