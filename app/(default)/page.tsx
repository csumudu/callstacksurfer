export const metadata = {
  title: "CallStack Surfer",
  description: "Decode, Debug, Deliver!",
};

import ArticlesHome from "../(articles)/articles/page";

export default function Home() {
  return (
    <>
      <div className="mt-16">
        <ArticlesHome />
      </div>
    </>
  );
}
