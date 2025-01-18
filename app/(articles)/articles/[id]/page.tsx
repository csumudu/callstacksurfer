import ComponentArticleWrapper from "@/components/component-article-wrapper";
import { MarkdownWrapper } from "@/components/markdown-wrapper";
import { API } from "@/db/sandbox/sandbox";

export default async function Article({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const article = await API.getArticleById(id);

  return (
    <div className="px-20 prose max-w-full">
      {article &&
        (() => {
          switch (article.articleType.name) {
            case "component":
              return (
                <ComponentArticleWrapper
                  componentName={article.componentName}
                  article={article}
                ></ComponentArticleWrapper>
              );

            default:
              return <MarkdownWrapper>{article?.content}</MarkdownWrapper>;
          }
        })()}
    </div>
  );
}
