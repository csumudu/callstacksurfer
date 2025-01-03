import Link from "next/link";

export default function ArticleListItem({ article }: any) {
  return (
    <Link href={article.link}>
      <div className="flex gap-5 p-3 px-10 items-center justify-start cursor-pointer border-b hover:shadow">
        <div className="text-gray-500 text-xs font-light">{article.date}</div>
        <div className="font-light">{article.title}</div>
      </div>
    </Link>
  );
}
