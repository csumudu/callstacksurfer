import { MarkdownWrapper } from "@/components/markdown-wrapper";
import { API } from "@/db/sandbox/sandbox";

export default async function Article({ params }: { params: { id: string } }) {
  const id = (await params).id;
  const article = await API.getArticleById(id);
  
  return (
    <div className="px-20 prose max-w-full">
      <MarkdownWrapper>{article?.content}</MarkdownWrapper>
    </div>
  );
}
