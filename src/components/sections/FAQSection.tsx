import type { FAQContent } from "../../lib/content/models";
import Section from "../ui/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FAQSection({ content }: { content: FAQContent }) {
  return (
    <Section eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle}>
      <div className="rounded-3xl border border-foreground/10 bg-surface-2/80 p-6">
        <Accordion type="single" collapsible className="w-full">
          {content.items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
