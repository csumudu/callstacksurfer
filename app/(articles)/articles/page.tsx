import ArticleListItem from "@/components/article-list-item";
import { API } from "@/db/sandbox/sandbox";

export default async function ArticlesHome() {
  const articles = await API.getArticles();
  return (
    <div className="grid gap-5  grid-cols-2 justify-center align-middle">
      {articles.map((a, i) => (
        <ArticleListItem key={a.id} article={a} />
      ))}
    </div>
  );
}
