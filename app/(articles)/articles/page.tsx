import ArticleListItem from "@/components/article-list-item";
import { API } from "@/db/sandbox/sandbox";

export default async function ArticlesHome() {
  const articles = await API.getArticles();
  return (
    <div className="flex justify-center align-middle">
      <ul>
        {articles.map((a,i) => (
          <li key={a.id} className={`motion-opacity-in-0 motion-duration-[${1*i}s] motion-delay-[${100 * i*3}ms]`}>
            <ArticleListItem article={a} />
          </li>
        ))}
      </ul>
    </div>
  );
}
