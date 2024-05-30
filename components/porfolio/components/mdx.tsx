import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";

function Table({ data }: any) {
  let headers = data.headers.map((header: any, index: any) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row: any, index: any) => (
    <tr key={index}>
      {row.map((cell: any, cellIndex: any) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props: any) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link className="text-blue-500" href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props}>Link</a>;
  }

  return (
    <a rel="noopener noreferrer" target="_blank" {...props}>
      Link
    </a>
  );
}

const CustomUnorderedList = ({ children }) => {
  return (
    <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>{children}</ul>
  );
};

const CustomOrderedList = ({ children }) => {
  return <ol style={{ paddingLeft: "20px" }}>{children}</ol>;
};

const CustomListItem = ({ children }) => {
  return <li style={{ margin: "10px 0" }}>{children}</li>;
};

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children);

  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str: any) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: any) {
  const Heading = ({ children }: any) => {
    let slug = slugify(children);
    let level2size = [
      "mb-2 text-sm",
      "mb-2 text-5xl",
      "mb-2 text-4xl",
      "mb-2 text-2xl",
      "mb-2 text-xl",
      "mb-2 text-lg",
      "mb-2 text-md",
      "mb-2 text-sm",
    ];

    return React.createElement(
      `h${level}`,
      { id: slug, className: level2size[level] },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  p: (props: any) => <p className="my-4" {...props} />,
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  ul: CustomUnorderedList,
  ol: CustomOrderedList,
  li: CustomListItem,
};

export function CustomMDX(props: any) {
  return (
    <div className="wrapper">
      {/* @ts-expect-error Server Component */}
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </div>
  );
}
