import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import LiIcon from "../components/LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-8 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="fony-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Lead Frontend dev"
            company="Software Solutions KE"
            companyLink="https://mutabletech.co.ke/"
            time="March 2024 - Present"
            address="Eldoret, KE"
            work="I collaborated with a talented team of interns to craft innovative solutions and features for our product. Together, we focused on enhancing state management, refining existing features, and elevating the overall quality of our service to meet users' needs. We also brainstormed ideas to enhance user experience and rigorously evaluated feature relevance, ensuring our product stayed at the forefront of excellence."
          />
          <Details
            position="Open Source"
            company="SpaceYaTech platform"
            companyLink="https://www.spaceyatech.com/"
            time="Jan 2024-March"
            address="Nairobi, KE"
            work="Collaborated with a dynamic team to innovate and enhance the SYT community platform with exciting new features. Our focus was on fine-tuning accuracy and revamping the UI/UX across various sections of the platform. We thrived on brainstorming fresh ideas and meticulously assessing their impact, all with the aim of creating a vibrant and engaging experience for our users."
          />
          <Details
            position="Web developer"
            company="Private Startup"
            companyLink="https://mine-j7ov.vercel.app/"
            time="Sep 2023-Jan 2023"
            address="Nakuru, KE"
            work="I had the exciting opportunity to collaborate with a team to launch and enhance fresh web features. Our goal? To ensure these features not only functioned flawlessly but also provided more value to our users. Additionally, we innovated by developing new tools to optimize performance, ensuring a smoother and speedier experience for all."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
