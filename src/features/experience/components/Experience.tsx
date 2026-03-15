import { Container } from "../../../components/Container";
import { SectionHeading } from "../../../components/SectionHeading";
import { AnimatedSection } from "../../../components/AnimatedSection";
import { SECTION_IDS } from "../../../utils/constants";
import { experiences } from "../../../data/experience";
import { TimelineItem } from "./TimelineItem";

export const Experience = () => {
  return (
    <section
      id={SECTION_IDS.EXPERIENCE}
      className="bg-white py-20 dark:bg-slate-900 lg:py-28"
    >
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Experience"
            subtitle="My professional journey across industries and technologies"
          />
        </AnimatedSection>

        <div className="mx-auto max-w-3xl">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.company}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
