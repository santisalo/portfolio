import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Chip,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import NextImage from "next/image";

import { tech2color } from "./utils";
type ProjectCardProps = {
  title: string;
  projectType: string;
  technology: string;
  imageUrl?: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Card className="py-2 items-center">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center lg:items-start">
        <h4 className="font-bold text-lg">{props.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 items-center lg:items-start">
        <Image
          isZoomed
          alt="Card background"
          as={NextImage}
          className="object-cover rounded-xl max-w-full aspect-square object-top border-2 border-slate-500"
          height={270}
          src={props.imageUrl}
          width={270}
        />
      </CardBody>
      <Divider className="my-2" />
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-center lg:items-start">
        <p className="text-tiny uppercase font-bold">
          {props.projectType.toUpperCase()}
        </p>
        <div>
          {props.technology.split(",").map((tech) => (
            <Chip
              key={tech}
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
