import { PropsWithChildren } from "react";
import ReactMarkdown from "react-markdown";

export const MarkdownWrapper = ({ children }: PropsWithChildren) => {
  return <ReactMarkdown children={children as any} />;
};
