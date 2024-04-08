import Link from "next/link";
import Logo from "../components/Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "../components/Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mx-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="mx-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://github.com/allanmathenge"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <GithubIcon />
        </motion.a>

        <motion.a
          href="https://www.youtube.com/channel/UCZkAGHIat_CrbuZ9CBmNlww"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <YouTubeIcon />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/allan-mathenge-2a6b51252/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BuyeBYGlgRciBVN4ggoUs5A%3D%3D"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <LinkedInIcon />
        </motion.a>

        <motion.a
          href="https://twitter.com/1mathenge?t=Cz2Q9lopNxAODz76obsvng&s=09"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <TwitterIcon />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
