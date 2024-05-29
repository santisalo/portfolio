import ProjectCard from "@/components/ProjectCard";
type PostListProps = {
  limit?: number;
  posts: any[];
};
export function PostList(props: PostListProps) {
  let allPortfolios = props.posts;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {allPortfolios
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) < new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }

          return 1;
        })
        .slice(0, props.limit)
        .map((post, i) => (
          <ProjectCard
            key={i + "-" + post.metadata.id}
            imageUrl={post.metadata.imageUrl}
            projectType={post.metadata.projectType}
            slug={post.slug}
            technology={post.metadata.technology}
            title={post.metadata.title}
          />
        ))}
    </div>
  );
}
