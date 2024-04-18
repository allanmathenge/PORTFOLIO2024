import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { GithubIcon } from "../components/Icons";
import AnimatedText from "../components/AnimatedText";
import TransitionEffect from "../components/TransitionEffect";
import chicken from "../../public/images/projects/chicken.jpg";
import netlifyClone from "../../public/images/projects/netlifyClone.jpg";
import AiSummarizer from "../../public/images/projects/AiSummarizer.jpg";
import TikTokClone from "../../public/images/projects/tiktokClone.jpg";
import AndroidMusicApp from "../../public/images/projects/AndroidMusicApp.jpg";
import prompts from "../../public/images/projects/prompts.jpg";
import records from "../../public/images/projects/records.jpg";
import shop from "../../public/images/projects/shop.jpg";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-2xl">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:text-dark hover:bg-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md-text-base">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline underline-offset-2 md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
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
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Takes the Crown!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Premier Poultry Destination!"
                img={chicken}
                summary="This project specialized in the sale of chicken products as the ultimate choice for customers offering top-quality poultry items. It was crafted with care and precision using ReactJs, Bootstrap CSS, NodeJS and MongoDB to ensure efficiency and ultimate user's satisfaction."
                link="https://mine-j7ov.vercel.app/"
                github="https://github.com/allanmathenge/MINE"
                type="Online Poultry market"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Netlify clone"
                img={netlifyClone}
                link="https://clone-987.netlify.app/"
                github="https://github.com/allanmathenge/netlify_clone"
                type="App Clone"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Next Gen Social Craze"
                img={TikTokClone}
                link="https://tiktik-clone-gules-mu.vercel.app/?topic=dance"
                github="https://github.com/allanmathenge/tiktik_clone"
                type="TikTok clone"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Customer records system"
                img={records}
                link="https://allan.onrender.com/"
                github="https://github.com/allanmathenge/mern_stack"
                type="Records keeping system"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="AI Article Summarizer"
                img={AiSummarizer}
                summary="Say goodbye to lengthy reads and hello to quick, comprehensive summaries tailored just for you. AI Article Summarizer project created using JavaScript, CSS and React condensed complex content into bite-sized brilliance by copying and pasting the link on the input."
                link="https://papaya-mochi-52fc61.netlify.app/"
                github="https://github.com/allanmathenge/ai_summarizer"
                type="AI article summarizer"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Android Music App"
                img={AndroidMusicApp}
                link="/"
                github="https://github.com/allanmathenge/androidMusicApp"
                type="Android apps"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="AI Promptopia"
                img={prompts}
                link="https://ai-promptopia-qe8tki88s-allanmathenge.vercel.app/"
                github="https://github.com/allanmathenge/AI_Promptopia"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Online Fashion Store"
                img={shop}
                link="https://shop-6.vercel.app/"
                github="https://github.com/allanmathenge/shop"
                type="Online Store"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
