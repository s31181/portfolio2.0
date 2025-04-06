
import { Hero, Quote, Section, StatBox } from "@components";
import { Code, CSS3, Figma, HTML5, JavaScript, ReactImg, TypeScript } from "@images";
import Image from "next/image";
export default function Home() {
  const stats = [
    {
      imageSrc: HTML5,
      subtitle: 'HTML5',
    },
    {
      imageSrc: CSS3,
      subtitle: 'CSS3',
    },
    {
      imageSrc: JavaScript,
      subtitle: 'JavaScript',
    },
    {
      imageSrc: ReactImg,
      subtitle: 'React',
    },
    {
      imageSrc: TypeScript,
      subtitle: 'TypeScript',
    },
    {
      imageSrc: Figma,
      subtitle: 'Figma',
    },

  ];
  return (
    <main>
      <Hero />
      <Section className={"about-me"}>
        <h2 id="about-me">About Me</h2>
        <Quote>
          <p>
            <>{`Driven by precision, focused on building interfaces that are inclusive, performant, and intuitive. Engineering seamless web experiences that prioritize accessibility, speed, and human-centered design.`}</>
          </p>
        </Quote>
        <StatBox stats={stats} />
      </Section>
      <Section className={"projects"} id="projects">
        <h2 >Selected Projects</h2>
        <div className="imageWrapper">
          <Image src={Code} alt="Code" fill objectFit="cover" />
        </div>
      </Section>
    </main>
  );
}
