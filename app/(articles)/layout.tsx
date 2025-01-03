import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="grow container mx-auto  mt-24">{children}</main>

      <Footer border={true} />
    </>
  );
}
