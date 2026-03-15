import { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Badge } from "../../../components/Badge";
import type { Experience } from "../../../types";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export const TimelineItem = ({ experience, index }: TimelineItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleBullets = isExpanded
    ? experience.bullets
    : experience.bullets.slice(0, 2);
  const hasMore = experience.bullets.length > 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6 pb-12 last:pb-0 md:gap-10"
    >
      {/* Timeline Line & Dot */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary-600 bg-primary-50 dark:border-primary-400 dark:bg-primary-900/30">
          <div className="h-3 w-3 rounded-full bg-primary-600 dark:bg-primary-400" />
        </div>
        <div className="w-0.5 grow bg-slate-200 dark:bg-slate-700" />
      </div>

      {/* Content */}
      <div className="flex-1 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {experience.company}
            </h3>
            <p className="text-base font-medium text-primary-600 dark:text-primary-400">
              {experience.role}
            </p>
          </div>
          <Badge
            variant={experience.type === "Contract" ? "outline" : "primary"}
            size="sm"
          >
            {experience.type}
          </Badge>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
          <span>{experience.period}</span>
          <span className="flex items-center gap-1">
            <FiMapPin size={14} />
            {experience.location}
          </span>
        </div>

        <ul className="mt-4 space-y-2">
          {visibleBullets.map((bullet, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
              {bullet}
            </li>
          ))}
        </ul>

        {hasMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 flex items-center gap-1 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            {isExpanded ? (
              <>
                Show Less <FiChevronUp size={16} />
              </>
            ) : (
              <>
                Show More <FiChevronDown size={16} />
              </>
            )}
          </button>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {experience.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
