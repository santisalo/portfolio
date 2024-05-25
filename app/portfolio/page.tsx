import { PortfolioPosts } from "@/components/porfolio/components/posts";

export const metadata = {
  title: "Mi Portfolio",
  description: "Son mis clientes.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Mi Portfolio
      </h1>
      <PortfolioPosts />
    </section>
  );
}
