import type { Skill, SkillCategory as SkillCategoryType } from "../../../types";
import { SkillCard } from "./SkillCard";

interface SkillCategoryProps {
  category: SkillCategoryType;
  skills: Skill[];
}

export const SkillCategory = ({ category, skills }: SkillCategoryProps) => {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
        {category}
      </h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};
