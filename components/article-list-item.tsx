import Link from "next/link";
import { format } from "date-fns";

export default function ArticleListItem({ article }: any) {
  return (
    <Link href={`/articles/${article.id}`}>
      <div
        className="grid sm:grid-cols-2 md:grid-cols-3   rounded-lg gap-5 p-3  
      items-center justify-between cursor-pointer border-b
      transition duration-500
      hover:scale-[1.025] 
     "
      >
        <div
          className={`bg-center  sm:justify-self-start  md:justify-self-end bg-cover size-40 rounded-md drop-shadow-lg`}
          style={{ backgroundImage: `url(${article.thumbnail})` }}
        ></div>
        <div className="font-light hover:text-gray-900">{article.title}</div>
        <div className="text-gray-500 text-xs font-light">
          {format(article.date, "dd MMM yyyy ")}
        </div>
      </div>
    </Link>
  );
}
