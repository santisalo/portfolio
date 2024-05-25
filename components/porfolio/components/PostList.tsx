import { getPortfolioPosts } from "@/app/portfolio/utils";
import ProjectCard from "@/components/ProjectCard";

export function PostList() {
  let allPortfolios = getPortfolioPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {allPortfolios
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }

          return 1;
        })
        .map((post) => (
          <ProjectCard
            key={post.metadata.id}
            imageUrl={post.metadata.imageUrl}
            projectType={post.metadata.projectType}
            technology={post.metadata.technology}
            title={post.metadata.title}
          />
        ))}
    </div>
  );
}
