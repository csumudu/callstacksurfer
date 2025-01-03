export const metadata = {
  title: "CallStack Surfer",
  description: "Decode, Debug, Deliver!",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import { Profile } from "@/components/profile";
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
