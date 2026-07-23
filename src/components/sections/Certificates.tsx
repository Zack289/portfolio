import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { certificates } from "@/data/certificates";
import { staggerContainer, fadeUp } from "@/animations/variants";

export function Certificates() {
  return (
    <Section id="certificates">
      <Container>
        <Heading path="~/certificates" title="Certificates" />

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {certificates.map((certificate) => (
            <motion.div key={certificate.id} variants={fadeUp}>
              <Card interactive className="flex h-full flex-col gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brass-500/10 text-brass-600 dark:bg-brass-400/15 dark:text-brass-300">
                  <Award size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-base font-medium text-ink-900 dark:text-paper-50">
                    {certificate.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">
                    {certificate.issuer} · {certificate.date}
                  </p>
                </div>
                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-ink-600 hover:text-brass-600 dark:text-ink-300 dark:hover:text-brass-400"
                  >
                    View credential <ExternalLink size={12} />
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
