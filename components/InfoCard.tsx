import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

import { IconPackLinkedin } from "./icons";

export default function InfoCard() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="m-2 text-3xl font-bold">Sobre Mí</p>
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-lg">
          Lo que me gusta hacer es resolver problemas y en el desarrollo de
          software encontré muchas herramientas para hacer eso que me gusta
          tanto! Lo que me gusta hacer es resolver problemas y en el desarrollo
          de software encontré muchas herramientas para hacer eso que me gusta
          tanto!
        </p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          anchorIcon={<IconPackLinkedin height={36} width={36} />}
          href="https://github.com/nextui-org/nextui"
        >
          Ver mas en mi LinkedIn
        </Link>
      </CardFooter>
    </Card>
  );
}
