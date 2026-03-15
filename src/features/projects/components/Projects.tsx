import { useState, useMemo } from "react";
import { Container } from "../../../components/Container";
import { SectionHeading } from "../../../components/SectionHeading";
import { AnimatedSection } from "../../../components/AnimatedSection";
import { SECTION_IDS } from "../../../utils/constants";
import { projects } from "../../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "../../../utils/cn";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id={SECTION_IDS.PROJECTS}
      className="bg-slate-50 py-20 dark:bg-slate-950 lg:py-28"
    >
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Projects"
            subtitle="Notable systems I've architected and built"
          />
        </AnimatedSection>

        {/* Filter */}
        <AnimatedSection delay={0.1}>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeFilter === category
                    ? "bg-primary-600 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Project Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
