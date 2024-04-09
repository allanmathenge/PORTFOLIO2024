import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Image from "next/image";
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
                text="Turning Vision Into Reality With Code"
                className="!text-6xl"
              />
              <p className="">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
