import { useState } from "react";
import type { MouseEvent } from "react";
import * as SiIcons from "react-icons/si";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import { Check, Copy, Download, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { staggerContainer, fadeUp } from "@/animations/variants";
import { gmailComposeUrl } from "@/utils/mail";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail(event: MouseEvent) {
    event.preventDefault(); // don't follow the parent link, just copy
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Section id="contact">
      <Container>
        <Heading
          path="~/contact"
          title="Let's talk"
          description="Open to internships, junior roles, and collaborations. The fastest way to reach me is email."
        />

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp}>
            <Card interactive className="flex h-full flex-col gap-3 p-0">
              <a
                href={gmailComposeUrl(profile.email)}
                target="_blank"
                rel="noreferrer"
                className="flex h-full flex-col gap-3 p-6"
              >
                <Mail
                  size={18}
                  className="text-brass-600 dark:text-brass-400"
                />
                <p className="font-mono text-sm text-ink-800 dark:text-paper-100">
                  {profile.email}
                </p>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="mt-auto flex items-center gap-1.5 self-start font-mono text-xs text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-paper-50"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? "Copied" : "Copy email"}
                </button>
              </a>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card interactive className="flex h-full flex-col gap-3">
              <MapPin
                size={18}
                className="text-signal-600 dark:text-signal-400"
              />
              <p className="font-mono text-sm text-ink-800 dark:text-paper-100">
                {profile.location}
              </p>
              <p className="mt-auto text-xs text-ink-500 dark:text-ink-300">
                Available remotely
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card
              interactive
              className="flex h-full flex-col justify-between gap-3"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-ink-500 dark:text-ink-400">
                Resume
              </p>
              <Button
                as="a"
                href={profile.resumeUrl}
                variant="secondary"
                icon={<Download size={14} />}
                className="self-start"
              >
                Download
              </Button>
            </Card>
          </motion.div>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-4">
          {socials.map((social) => {
            const Icon = (SiIcons as unknown as Record<string, IconType>)[
              social.icon
            ];
            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-ink-700/15 px-4 py-2 font-mono text-xs text-ink-700 transition-colors hover:border-brass-500/40 hover:text-brass-600 dark:border-paper-50/15 dark:text-ink-200 dark:hover:text-brass-400"
              >
                {Icon && <Icon size={14} />}
                {social.label}
              </a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
