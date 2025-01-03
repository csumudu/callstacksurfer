"use client";

import { useEffect, useState } from "react";
import { ArticleCol } from "../../data";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default function Article() {
  const [article, setArticle] = useState<any>(null);

  const params = useParams<{ id: string }>();

  useEffect(() => {
    setArticle(ArticleCol.find((a) => a.id == params.id));
  }, [params.id]);

  return (
    <div className="px-20 prose max-w-full">
      <ReactMarkdown>{article?.content}</ReactMarkdown>
    </div>
  );
}
