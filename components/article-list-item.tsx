import Link from "next/link";

export default function ArticleListItem({ article }: any) {
  return (
    <Link href={article.link}>
      <div className="grid  grid-cols-[10rem_minmax(20rem,_1fr)_5rem] rounded-lg gap-5 p-3  items-center justify-between cursor-pointer border-b bg-gradient-to-r hover:from-gray-50 hover:via-gray-200 hover:to-gray-50">
        <div
          className={`bg-center bg-cover size-40 rounded-md drop-shadow-lg`}
          style={{ backgroundImage: `url(${article.thumbnail})` }}
        ></div>
        <div className="font-light hover:text-gray-900">{article.title}</div>
        <div className="text-gray-500 text-xs font-light">{article.date}</div>
      </div>
    </Link>
  );
}
