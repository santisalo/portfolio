import { Chip } from "@nextui-org/react";
import Image from "next/image";

import { tech2color } from "./utils";
import { CustomMDX } from "./porfolio/components/mdx";

import { removeDotFromSlug } from "@/app/[locale]/utils";
type ProjectCardProps = {
  post: any;
};

export default function ProjectPageContent(props: ProjectCardProps) {
  return (
    <div>
      <h1
        className="font-bold text-4xl mb-1 text-center lg:text-left"
        style={{
          viewTransitionName:
            "project-title-" + removeDotFromSlug(props.post.slug),
        }}
      >
        {props.post.metadata.title}
      </h1>
      <h2
        className="text-tiny mb-1 uppercase font-bold mb-1 text-center lg:text-left"
        style={{
          viewTransitionName:
            "project-type-" + removeDotFromSlug(props.post.slug),
        }}
      >
        {props.post.metadata.projectType}
      </h2>

      <div className="mb-3  text-center lg:text-left">
        {props.post.metadata.technology.split(",").map((tech, i) => (
          <Chip
            key={i + "-" + tech}
            className="mr-1 mb-1"
            color={tech2color(tech.trim())}
            size="sm"
            variant="flat"
          >
            {tech}
          </Chip>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex justify-center lg:me-10">
          <Image
            alt="Card background"
            className="object-cover rounded-xl mb-10 h-full min-w-80 max-h-[400px] lg:min-w-[425px] lg:max-h-[720px] object-top border-2 border-slate-500 hover:transform hover:scale-105 transition-all"
            height={640}
            src={props.post.metadata.imageUrl}
            style={{
              viewTransitionName:
                "project-image-" + removeDotFromSlug(props.post.slug),
            }}
            width={360}
          />
        </div>
        <div>
          <CustomMDX source={props.post.content} />
        </div>
      </div>
    </div>
  );
}
