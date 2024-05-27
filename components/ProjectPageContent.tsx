import { Chip } from "@nextui-org/react";
import Image from "next/image";

import { tech2color } from "./utils";

import { removeDotFromSlug } from "@/app/[locale]/utils";
type ProjectCardProps = {
  slug: string;
  title: string;
  projectType: string;
  technology: string;
  imageUrl?: string;
};

export default function ProjectPageContent(props: ProjectCardProps) {
  return (
    <div>
      <h1
        className="font-bold text-4xl mb-1 text-center lg:text-left"
        style={{
          viewTransitionName: "project-title-" + removeDotFromSlug(props.slug),
        }}
      >
        {props.title}
      </h1>
      <h2
        className="text-tiny mb-1 uppercase font-bold mb-1 text-center lg:text-left"
        style={{
          viewTransitionName: "project-type-" + removeDotFromSlug(props.slug),
        }}
      >
        {props.projectType}
      </h2>

      <div className="mb-3  text-center lg:text-left">
        {props.technology.split(",").map((tech, i) => (
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
            className="object-cover rounded-xl max-w-full object-top border-2 border-slate-500 hover:transform hover:scale-105 transition-all"
            height={640}
            src={props.imageUrl}
            style={{
              viewTransitionName:
                "project-image-" + removeDotFromSlug(props.slug),
            }}
            width={360}
          />
        </div>
        <div>asdasdas</div>
      </div>
    </div>
  );
}
