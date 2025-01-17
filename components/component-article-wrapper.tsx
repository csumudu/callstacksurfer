import { ArticleComponentMap, ArticleExtended } from "@/models/data.models";
import { PropsWithChildren } from "react";

const ComponentArticleWrapper = async ({
  componentName,
  article,
  ...rest
}: PropsWithChildren<{
  componentName: string | null;
  article: ArticleExtended;
}>) => {
  const Component = componentName && (await ArticleComponentMap[componentName]);
  return <Component {...rest}></Component>;
};

export default ComponentArticleWrapper;
