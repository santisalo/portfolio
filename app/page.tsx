import { Code } from "@nextui-org/code";
import { Divider } from "@nextui-org/react";

import { getMyAge } from "./utils";

import InfoCard from "@/components/InfoCard";
import { title } from "@/components/primitives";
import InterestChip from "@/components/InterestChip";
import MyHistory from "@/components/MyHistory";
import { PostList } from "@/components/porfolio/components/PostList";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="block max-w-lg text-center justify-center">
          <h1 className={title({ size: "lg" })}>Hola, soy</h1>
          <br />
          <h2 className={title({ color: "green" })}>Santiago Salomón</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 items-stretch">
          <div>
            <InfoCard />
          </div>
          <div>
            <InterestChip color="violet" emoji="💻" label="Fullstack Dev" />
            <InterestChip
              color="violet"
              emoji="🎓"
              label="Ingeniero en Informática"
            />
            <InterestChip color="beach" emoji="🌴" label="Viajero" />
            <InterestChip color="futbol" emoji="⚽" label="Futbolero" />
            <InterestChip color="argentina" emoji="💙🤍💙" label="Argentino" />
            <InterestChip
              color="red"
              emoji="🧔"
              label={getMyAge("1994-08-27") + " años"}
            />
          </div>
        </div>
      </section>

      <Divider className="my-16" />

      <section>
        <div className="mb-10">
          <h3 className={title({ size: "md" })}>Tecnologías</h3>
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
          <Code color="success" size="lg">
            Spring
          </Code>
          <Code color="warning" size="lg">
            Java
          </Code>
          <Code color="default" size="lg">
            NodeJS
          </Code>
          <Code color="secondary" size="lg">
            MySQL
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

      <Divider className="my-16" />
      <section className="w-full">
        <div className="mb-10">
          <h3 className={title({ size: "md" })}>Mi Camino</h3>
        </div>
        <div className="w-full">
          <MyHistory />
        </div>
      </section>

      <Divider className="my-16" />
      <section className="w-full">
        <div className="mb-10">
          <h3 className={title({ size: "md" })}>Proyectos Destacados</h3>
        </div>
        <PostList />
      </section>
    </main>
  );
}
