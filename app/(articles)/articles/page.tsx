import ArticleListItem from "@/components/article-list-item";
import { API } from "@/db/sandbox/sandbox";

export default async function ArticlesHome() {
  const articles = await API.getArticles();
  return (
    <div className="flex justify-center align-middle">
      <ul>
        {articles.map((a) => (
          <li key={a.id}>
            <ArticleListItem article={a} />
          </li>
        ))}
      </ul>
    </div>
  );
}
