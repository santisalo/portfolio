import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

type InfoCardProps = {
  title: string;
  content: string;
  footer: string;
  icon: JSX.Element;
  url: string;
};

export default function InfoCard(props: InfoCardProps) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="m-2 text-3xl font-bold">{props.title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-justify">{props.content}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          anchorIcon={props.icon}
          href={props.url}
        >
          {props.footer}
        </Link>
      </CardFooter>
    </Card>
  );
}
