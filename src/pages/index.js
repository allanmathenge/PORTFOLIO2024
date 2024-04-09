import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { LinkArrow } from "../components/Icons";
import profilePic from "../../public/images/profile/developer-pic-1.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PORTFOLIO</title>
        <meta name="description" content="PORTFOLIO" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="My portfolio img"
                className="w-full h-auto"
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
                  href="/Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-black text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>

                <Link
                  href="mailto:allanmathenge2@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-mediun capitalize text-dark  underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
