import { useState, useMemo } from "react";
import { Container } from "../../../components/Container";
import { SectionHeading } from "../../../components/SectionHeading";
import { AnimatedSection } from "../../../components/AnimatedSection";
import { SECTION_IDS } from "../../../utils/constants";
import { skills } from "../../../data/skills";
import type { SkillCategory as SkillCategoryType } from "../../../types";
import { SkillCategory } from "./SkillCategory";
import { cn } from "../../../utils/cn";

const ALL_CATEGORIES: SkillCategoryType[] = [
  "Backend",
  "Database",
  "Frontend",
  "DevOps",
  "Architecture",
  "Practices",
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategoryType | "All">("All");

  const filteredCategories = useMemo(() => {
    if (activeCategory === "All") return ALL_CATEGORIES;
    return [activeCategory];
  }, [activeCategory]);

  const skillsByCategory = useMemo(() => {
    const map = new Map<SkillCategoryType, typeof skills>();
    for (const skill of skills) {
      const existing = map.get(skill.category) ?? [];
      existing.push(skill);
      map.set(skill.category, existing);
    }
    return map;
  }, []);

  return (
    <section
      id={SECTION_IDS.SKILLS}
      className="bg-slate-50 py-20 dark:bg-slate-950 lg:py-28"
    >
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Skills & Expertise"
            subtitle="Technologies and practices I work with daily"
          />
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={0.1}>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {(["All", ...ALL_CATEGORIES] as const).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-primary-600 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {filteredCategories.map((category) => {
            const categorySkills = skillsByCategory.get(category);
            if (!categorySkills) return null;
            return (
              <AnimatedSection key={category} variant="fadeUp" delay={0.1}>
                <SkillCategory category={category} skills={categorySkills} />
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
