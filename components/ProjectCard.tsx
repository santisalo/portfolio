import {
  Card,
  CardHeader,
  CardBody,
  Chip,
  CardFooter,
  Divider,
} from "@nextui-org/react";
//import { Link } from "next-view-transitions";
import Image from "next/image";

import { tech2color } from "./utils";
import LinkLocale from "./LinkLocale";

import { removeDotFromSlug } from "@/app/[locale]/utils";
type ProjectCardProps = {
  slug: string;
  title: string;
  projectType: string;
  technology: string;
  imageUrl?: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Card className="py-2 items-center">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center lg:items-start">
        <h4
          className="font-bold text-lg"
          style={{
            viewTransitionName:
              "project-title-" + removeDotFromSlug(props.slug),
          }}
        >
          {props.title}
        </h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 items-center lg:items-start">
        <LinkLocale href={`/portfolio/${props.slug}`}>
          <Image
            alt="Card background"
            className="object-cover rounded-xl max-w-full aspect-square object-top border-2 border-slate-500 hover:transform hover:scale-105 transition-all"
            height={270}
            src={props.imageUrl}
            style={{
              viewTransitionName:
                "project-image-" + removeDotFromSlug(props.slug),
            }}
            width={270}
          />
        </LinkLocale>
      </CardBody>
      <Divider className="my-2" />
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-center lg:items-start">
        <p
          className="text-tiny mb-1 uppercase font-bold"
          style={{
            viewTransitionName: "project-type-" + removeDotFromSlug(props.slug),
          }}
        >
          {props.projectType.toUpperCase()}
        </p>
        <div>
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
      </CardFooter>
    </Card>
  );
}
