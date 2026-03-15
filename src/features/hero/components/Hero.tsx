import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from "react-icons/fi";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";
import { SOCIAL_LINKS, SECTION_IDS } from "../../../utils/constants";
import { profile } from "../../../data/profile";

const subtitles = [
  "Backend Engineer",
  "Building Scalable Systems",
  "Architecting Microservices",
  "Securing Critical Infrastructure",
];

export const Hero = () => {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = subtitles[currentSubtitle];
    const timeout = isDeleting ? 30 : 60;

    if (!isDeleting && displayText === target) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? target.substring(0, displayText.length - 1)
          : target.substring(0, displayText.length + 1)
      );
    }, timeout);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentSubtitle]);

  return (
    <section
      id={SECTION_IDS.HERO}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-slate-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-primary-950" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary-200/20 blur-3xl dark:bg-primary-800/10" />
        <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-200/20 blur-3xl dark:bg-blue-900/10" />
      </div>

      <Container className="py-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-600 dark:text-primary-400">
              Welcome to my portfolio
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 h-10 sm:h-12"
          >
            <span className="text-xl font-medium text-slate-600 dark:text-slate-300 sm:text-2xl md:text-3xl">
              {displayText}
              <span className="animate-pulse text-primary-600">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg text-slate-500 dark:text-slate-400"
          >
            {profile.summary.split(".").slice(0, 2).join(".")}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              as="a"
              href={`#${SECTION_IDS.PROJECTS}`}
              variant="primary"
              size="lg"
            >
              View My Work
            </Button>
            <Button
              as="a"
              href="/Samuel_Owoeye_Resume.pdf"
              variant="outline"
              size="lg"
              leftIcon={<FiDownload size={18} />}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href={SOCIAL_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 p-3 text-slate-500 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 p-3 text-slate-500 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.EMAIL}
              className="rounded-full border border-slate-200 p-3 text-slate-500 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.a
        href={`#${SECTION_IDS.ABOUT}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 transition-colors hover:text-primary-600 dark:text-slate-500 dark:hover:text-primary-400"
        aria-label="Scroll to about section"
      >
        <FiArrowDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  );
};
