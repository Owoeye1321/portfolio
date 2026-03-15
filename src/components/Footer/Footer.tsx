import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { Container } from "../Container";
import { SOCIAL_LINKS, NAV_ITEMS } from "../../utils/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-900">
      <Container>
        <div className="flex flex-col items-center gap-8">
          {/* Quick Nav */}
          <div className="flex flex-wrap justify-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-500 transition-colors hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-primary-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-primary-400"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-primary-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-primary-400"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.EMAIL}
              className="rounded-lg p-2.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-primary-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-primary-400"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="flex items-center gap-1 text-sm text-slate-400 dark:text-slate-500">
            &copy; {currentYear} Samuel Owoeye. Built with{" "}
            <FiHeart className="inline text-red-500" size={14} /> using React &
            TypeScript.
          </p>
        </div>
      </Container>
    </footer>
  );
};
