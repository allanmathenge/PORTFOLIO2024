import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import TransitionEffect from "../components/TransitionEffect";
import blogs from "../../public/images/articles/blogs.jpg";
import MERN from "../../public/images/articles/MERN.jpg";
import auath from "../../public/images/articles/auath.jpg";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  const handleMouse = (event) => {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  };
  const handleMouseLeave = (event) => {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>

      <FramerImage
        style={{ x: x, y: y }}
        src={img}
        alt={title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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

      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>

      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Allan Mathenge | Articles Page</title>
        <meta
          name="description"
          content="Allan Mathenge portfolio articles page"
        />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Transforming the World One Word at a Time!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="The Power of Programming Excellence with Python"
              summary="Python Power Unleashed: Elevate Your Code Game! Discover the language of possibilities with our insightful guide. From basics to brilliance, unlock the secrets of Python programming and chart your path to coding mastery."
              time="9 min read."
              link="https://allanblogs.netlify.app/python/"
              img={blogs}
            />
            <FeaturedArticle
              title="Discover MERN Mastery: Elevate Your Web Development Game! Unravel the secrets of MongoDB, Express.js, React, and Node.js with our comprehensive guide. From backend to frontend, unlock the full potential of MERN stack development in one go!"
              time="10 min read"
              link="https://allanblogs.netlify.app/mern-stack-mastery/"
              img={MERN}
            />

            <FeaturedArticle
              title="Unlocking Secure Gates: Demystifying the Authentication Process. Delve into the world of digital security as we guide you through the intricate maze of user authentication, ensuring your systems remain impenetrable yet user-friendly."
              time="12 min read"
              link="https://allanblogs.netlify.app/the-actual-auth-process/"
              img={auath}
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul className="">
            <Article
              title="The Power of Programming Excellence with Python"
              date="2023-08-15"
              img={blogs}
              link="https://allanblogs.netlify.app/python/"
            />
            <Article
              title="The comprehensive MERN Guide"
              date="2023-07-15"
              img={MERN}
              link="https://allanblogs.netlify.app/the-actual-auth-process/"
            />
            <Article
              title="The world of digital security with Google Auth2.0"
              date="2023-08-1"
              img={auath}
              link="https://allanblogs.netlify.app/auth2-0/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
