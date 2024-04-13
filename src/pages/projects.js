import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import GithubIcon from "../components/Icons";
import AnimatedText from "../components/AnimatedText";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="">
      <Link href={link} target="_blank">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="">
        <span className="">{type}</span>

        <Link href={link} target="_blank">
          <h2 className="">{title}</h2>
        </Link>

        <p className="">{summary}</p>

        <div className="">
          <Link href={github} target="_blank">
            <GithubIcon />
          </Link>

          <Link href={link} target="_blank">
            Visit the Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Allan Mathenge | Projects Page</title>
        <meta
          name="description"
          content="Allan Mathenge portfolio Projects page"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Takes the Crown" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              {/* <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                link="https"
                type="Featured Project"
                github="/" /> */}
            </div>
            <div className="col-span-6">Project-1</div>
            <div className="col-span-6">Project-2</div>
            <div className="col-span-12"></div>
            <div className="col-span-6">Project-3</div>
            <div className="col-span-6">Project-4</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
