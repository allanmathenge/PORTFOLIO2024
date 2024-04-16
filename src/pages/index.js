import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { LinkArrow } from "../components/Icons";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import HireMe from "../components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Allan Mathenge | Home Page</title>
        <meta name="description" content="Allan Mathenge portfolio home page" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="portfolio img"
                className="w-full h-auto"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 58vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Transforming your Dreams into Digital Reality"
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a proficient software developer, I am committed to bringing
                ideas to life through groundbreaking software solutions. Dive
                into my latest projects and insightful articles, highlighting my
                mastery in web and mobile development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-black text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>

                <Link
                  href="mailto:allanmathenge2@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-mediun capitalize text-dark underline dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image
            src={lightBulb}
            alt="Allan Mathenge"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
