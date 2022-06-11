import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

interface IProject {
  name: string;
  path: string;
}

const projects: IProject[] = [
  {
    name: "Box Shadow Backgrounds",
    path: "/components/box-shadow",
  },
  {
    name: "Underlines",
    path: "/components/underlines",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <Link href={project.path}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
