import { motion } from "framer-motion";
import { Card } from "../../../components/Card";
import { Badge } from "../../../components/Badge";
import type { Project } from "../../../types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card hoverable className="flex h-full flex-col">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <Badge variant="primary" size="sm">
            {project.category}
          </Badge>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <ul className="mb-5 flex-1 space-y-2">
          {project.features.map((feature, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm text-slate-500 dark:text-slate-400"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-slate-700">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};
