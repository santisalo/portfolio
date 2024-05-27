import { Code } from "@nextui-org/code";
import { Divider } from "@nextui-org/react";
import { useTranslations } from "next-intl";
// import Link from "next/link";

import { getMyAge } from "./utils";
import { getPortfolioPosts } from "./portfolio/utils";

import InfoCard from "@/components/InfoCard";
import { title } from "@/components/primitives";
import InterestChip from "@/components/InterestChip";
import MyHistory from "@/components/MyHistory";
import { PostList } from "@/components/porfolio/components/PostList";

import "./style.css";
import { IconPackLinkedin } from "@/components/icons";
import { siteConfig } from "@/config/site";
import LinkLocale from "@/components/LinkLocale";

export default function Home({ params }: any) {
  const t = useTranslations("Home");
  const posts = getPortfolioPosts(params.locale);

  return (
    <main>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="block max-w-lg text-center justify-center">
          <h1 className={title({ size: "lg" })}>{t("title")}</h1>
          <br />
          <h2 className={title({ color: "green" })}>Santiago Salomón</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 items-stretch">
          <div>
            <InfoCard
              content={t("aboutMeContent")}
              footer={t("moreOnMyLinkedin")}
              icon={<IconPackLinkedin height={36} width={36} />}
              title={t("aboutMe")}
              url={siteConfig.links.linkedin}
            />
          </div>
          <div className="flex flex-col justify-between">
            <InterestChip color="violet" emoji="💻" label={t("fullStackDev")} />
            <InterestChip
              color="violet"
              emoji="🎓"
              label={t("computerEngineer")}
            />
            <InterestChip
              color="argentina"
              emoji="💙🤍💙"
              label={t("argentine")}
            />
            <InterestChip
              color="red"
              emoji="🧔"
              label={getMyAge("1994-08-27") + " " + t("years")}
            />
            <InterestChip color="beach" emoji="🌴" label={t("traveler")} />
            <InterestChip color="futbol" emoji="⚽" label={t("footballer")} />
          </div>
        </div>
      </section>

      <Divider className="my-8 lg:my-16" />

      <section>
        <div className="mb-10">
          <h3 className={title({ size: "md" })}>{t("technologies")}</h3>
        </div>
        <div className="flex flex-wrap gap-4">
          <Code color="success" size="lg">
            Vue.js
          </Code>
          <Code color="primary" size="lg">
            React
          </Code>
          <Code color="danger" size="lg">
            Laravel
          </Code>
          <Code color="default" size="lg">
            NextJS
          </Code>
          <Code color="secondary" size="lg">
            MySQL
          </Code>
          <Code color="default" size="lg">
            NodeJS
          </Code>
          <Code color="primary" size="lg">
            Ionic
          </Code>
          <Code color="danger" size="lg">
            Angular
          </Code>
          <Code color="primary" size="lg">
            Capacitor
          </Code>
          <Code color="warning" size="lg">
            HTML5
          </Code>
          <Code color="success" size="lg">
            CSS3
          </Code>
          <Code color="warning" size="lg">
            Javascript
          </Code>
          <Code color="secondary" size="lg">
            Jquery
          </Code>
          <Code color="success" size="lg">
            Spring
          </Code>
          <Code color="warning" size="lg">
            Java
          </Code>
          <Code color="success" size="lg">
            PHP
          </Code>
          <Code color="primary" size="lg">
            Google Cloud
          </Code>
          <Code color="warning" size="lg">
            AWS
          </Code>
          <Code color="primary" size="lg">
            Photoshop
          </Code>
          <Code color="success" size="lg">
            Corel Draw
          </Code>
          <Code color="danger" size="lg">
            Sony Vegas
          </Code>
        </div>
      </section>

      <Divider className="my-8 lg:my-16" />
      <section className="w-full">
        <div className="mb-10">
          <h3 className={title({ size: "md" })}>{t("workExperience")}</h3>
        </div>
        <div className="w-full">
          <MyHistory />
        </div>
      </section>

      <Divider className="my-8 lg:my-16" />
      <section className="w-full">
        <div className="mb-10">
          <h3 className={title({ size: "md" })}>{t("featuredProjects")}</h3>
        </div>
        <PostList limit={8} posts={posts} />
        <div className="flex justify-center my-8">
          <LinkLocale
            className="px-3 py-2 bg-primary rounded-lg"
            href="/portfolio"
          >
            {t("moreProjects")}
          </LinkLocale>
        </div>
      </section>
      <Divider className="my-8 lg:my-16" />
    </main>
  );
}
