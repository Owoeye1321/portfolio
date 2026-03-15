import { Container } from "../../../components/Container";
import { SectionHeading } from "../../../components/SectionHeading";
import { AnimatedSection } from "../../../components/AnimatedSection";
import { SECTION_IDS } from "../../../utils/constants";
import { ContactInfo } from "./ContactInfo";

export const Contact = () => {
  return (
    <section
      id={SECTION_IDS.CONTACT}
      className="bg-white py-20 dark:bg-slate-900 lg:py-28"
    >
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a project in mind? Let's talk about it."
          />
        </AnimatedSection>

        <div className="mx-auto max-w-xl">
          <AnimatedSection variant="fadeUp" delay={0.1}>
            <ContactInfo />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};
