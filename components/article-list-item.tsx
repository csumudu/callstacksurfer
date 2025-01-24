import Link from "next/link";
import { format } from "date-fns";

export default function ArticleListItem({ article }: any) {
  return (
    <Link className="block motion-opacity-in-0 motion-duration-500" href={`/articles/${article.id}`}>
      <div
        className="article bg-white grid grid-cols-[1fr,2fr] rounded-lg gap-5 p-3  
      items-center justify-between cursor-pointer border-b hover:drop-shadow-xl transition-all duration-500 ease-in-out"
      >
        <div className="overflow-hidden w-[200px] rounded-xl">
          <img
            className="thumbnail transition-all duration-500 ease-in-out delay-150"
            src={article.thumbnail}
          />
        </div>
        <div className="font-light hover:text-gray-900">{article.title}</div>
        <div className="text-gray-500 text-xs font-light">
          {format(article.date, "dd MMM yyyy ")}
        </div>
      </div>
    </Link>
  );
}
