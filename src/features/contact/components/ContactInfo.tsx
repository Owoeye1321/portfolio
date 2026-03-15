import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";
import { SOCIAL_LINKS } from "../../../utils/constants";
import { profile } from "../../../data/profile";

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
          Let's Connect
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          I'm always open to discussing new projects, ideas, or opportunities to
          be part of your team. Feel free to reach out!
        </p>
      </div>

      <div className="space-y-4">
        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
            <FiMail size={20} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="text-slate-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
            >
              {profile.email}
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
            <FiPhone size={20} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Phone
            </p>
            <a
              href={`tel:${profile.phone}`}
              className="text-slate-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
            >
              {profile.phone}
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
            <FiMapPin size={20} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Location
            </p>
            <p className="text-slate-900 dark:text-white">{profile.location}</p>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-slate-500 dark:text-slate-400">
          Find me on
        </p>
        <div className="flex gap-3">
          <a
            href={SOCIAL_LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={SOCIAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
