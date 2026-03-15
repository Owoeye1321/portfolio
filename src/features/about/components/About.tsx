import { Container } from "../../../components/Container";
import { SectionHeading } from "../../../components/SectionHeading";
import { Badge } from "../../../components/Badge";
import { AnimatedSection } from "../../../components/AnimatedSection";
import { SECTION_IDS } from "../../../utils/constants";
import { profile, stats, domains } from "../../../data/profile";

export const About = () => {
  return (
    <section
      id={SECTION_IDS.ABOUT}
      className="bg-white py-20 dark:bg-slate-900 lg:py-28"
    >
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="About Me"
            subtitle="Get to know more about my background and what drives me"
          />
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Summary */}
          <AnimatedSection variant="slideLeft" delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                {profile.summary}
              </p>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                I thrive in fast-paced environments where I can architect
                solutions that handle real-world complexity — from multitenant
                banking systems to tax automation platforms. My approach
                combines clean architecture principles with pragmatic
                engineering to deliver systems that are secure, maintainable,
                and built to scale.
              </p>
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                  Domains
                </h3>
                <div className="flex flex-wrap gap-2">
                  {domains.map((domain) => (
                    <Badge key={domain} variant="primary" size="md">
                      {domain}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Stats */}
          <AnimatedSection variant="slideRight" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center transition-all hover:border-primary-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary-600"
                >
                  <AnimatedSection delay={0.1 * index}>
                    <p className="text-3xl font-bold text-primary-600 dark:text-primary-400 sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};
