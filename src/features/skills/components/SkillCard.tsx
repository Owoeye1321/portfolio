import { motion } from "framer-motion";
import type { Skill } from "../../../types";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export const SkillCard = ({ skill, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-primary-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary-600"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
          {skill.name}
        </span>
        <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
          {skill.proficiency}%
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-600"
        />
      </div>
    </motion.div>
  );
};
