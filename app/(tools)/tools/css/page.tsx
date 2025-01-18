import Link from "next/link";
import { CssToolWrapper } from "./tool-wrapper";
import { API } from "@/db/sandbox/sandbox";

const CssSpecificityTool = async () => {
  const article = await API.getArticleByTitle(
    "Visual CSS Specificity Calculator"
  );

  return (
    <div className="px-5 prose max-w-full">
      <h2>Css Specificity Calculator</h2>
      <Link href={`/articles/${article?.id}`}>
        Article: Check the article for more information
      </Link>
      <CssToolWrapper />
    </div>
  );
};

export default CssSpecificityTool;
