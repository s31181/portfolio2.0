
import { Hero, Quote, Section, StatBox, ProjectFlipper } from "@components";
import { Code, CSS3, Figma, HTML5, JavaScript, ReactImg, TypeScript } from "@images";
import Image from "next/image";
import { Ags, Chandelier, Garden, Rawcut } from '@images';

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

  const projects = [
    {
      image: Ags,
      title: 'Associated Global Systems',
      description: 'A custom WordPress site built for Associated Global Systems, where I implemented the frontend theme using SCSS and PHP templates, optimized performance and SEO, and ensured responsive, accessible design. The live site is no longer active, but an archived version is available via the Wayback Machine.',
      link: 'https://web.archive.org/web/20220316171848/http://www.agsystems.com/',
      tags: ["WordPress", "PHP", "SCSS", "JavaScript", "Responsive Design", "Accessibility", "SEO"]
    },
    {
      image: Chandelier,
      title: 'Chandelier Circus Entertainment',
      description: 'A Gatsby site designed for Chandelier Circus Entertainment, a Midwestern performing arts troupe. I built a custom React theme to highlight their shows, performers, and events, with a focus on performance and smooth navigation across devices.',
      link: 'https://chandeliercircus.com/',
      tags: ["React", "Gatsby", "SCSS", "JavaScript", "HTML", "Static Site", "Performance Optimization", "Mobile-First Design"]
    },
    {
      image: Garden,
      title: 'Garden of Eden Landscaping Co',
      description: 'A custom WordPress site for Garden of Eden Landscaping Co, serving the greater Chicagoland area. I developed the theme, structured content for easy updates, and ensured the site reflected their brand and services effectively.',
      link: 'https://gardenofedenco.com/',
      tags: ["WordPress", "PHP", "SCSS", "JavaScript", "Custom Theme", "Small Business", "Branding"]
    },
    {
      image: Rawcut,
      title: 'Rawcut Creative',
      description: 'A WordPress site for Rawcut Creative, a full-service creative agency. I developed a custom theme tailored to their multidisciplinary services, including graphic design, web development, and marketing. Emphasis was placed on clean design, usability, and scalable content structure.',
      link: 'https://rawcutcreative.com/',
      tags: ["WordPress", "PHP", "SCSS", "JavaScript", "HTML", "CSS", "Creative Agency", "Custom Theme"]
    },
  ];

  return (
    <main>
      <Hero />
      <Section className={"projects"} id="projects">
        <h2 >Selected Projects</h2>
        <div className="imageWrapper">
          <Image src={Code} alt="Code" fill objectFit="cover" />
        </div>
        <p>A curated selection of projects I&apos;ve contributed to over the years—each one a reflection of my growth, skills, and passion for impactful web experiences.</p>
        <ProjectFlipper projects={projects} />
      </Section>
      <Section className={"about-me"}>
        <h2 id="about-me">About Me</h2>
        <Quote>
          <p>
            <>{`Driven by precision, focused on building interfaces that are inclusive, performant, and intuitive. Engineering seamless web experiences that prioritize accessibility, speed, and human-centered design.`}</>
          </p>
        </Quote>
        <StatBox stats={stats} />
      </Section>
    </main>
  );
}
