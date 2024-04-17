import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import ProfilePic from "../../public/images/profile/MyProfile.jpg";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, 3000);
  const isInView = useInView(ref, { once: true }); // helps run the motion when element is in view

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]); // changes in these values trigger the code above

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Allan Mathenge | About Page</title>
        <meta
          name="description"
          content="Allan Mathenge portfolio about page"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Ignites Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biogragraphy
              </h2>
              <p className="font-medium">
                Hi, I&apos;m Allan Mathenge. I work on making websites and
                mobile apps, I also design how they look and work for users. I
                really enjoy creating digital stuff that people love to use.
                I&apos;ve been doing this for more than 2 years now, and I love
                finding new ways to make my clients&apos; ideas come to life.
              </p>

              <div className="border my-6 border-solid border-gray-400 h-[1px] w-full" />

              <p className="my-1 font-medium">
                I firmly believe that design goes beyond mere aesthetics;
                it&apos;s about problem-solving and crafting intuitive,
                delightful experiences for users.
              </p>

              <div className="border my-6 border-solid border-gray-400 w-full" />

              <p className="font-medium">
                Whether it&apos;s a website, mobile app, or any digital project,
                I always bring my dedication to top-notch design and
                user-focused mindset. I&apos;m excited about the chance to apply
                my skills and enthusiasm to your next project!
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={ProfilePic}
                alt="profile"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
