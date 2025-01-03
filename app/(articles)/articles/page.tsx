import ArticleListItem from "@/components/article-list-item";
import { ArticleCol } from "../data";

export default function ArticlesHome() {
  return (
    <div className="flex justify-center align-middle">
      <ul>
        {ArticleCol.map((a) => (
          <li key={a.link}>
            <ArticleListItem article={a} />
          </li>
        ))}
      </ul>
    </div>
  );
}
