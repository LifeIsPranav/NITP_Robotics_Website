import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { getTestimonials } from '@/data';

export function TestimonialsSection() {
  const testimonials = getTestimonials();
  return (
    <section className="section-padding bg-muted/40 dark:bg-muted/10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-primary tracking-wide uppercase mb-4"
          >
            Voices
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl font-bold tracking-tight"
          >
            From those who've been here.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="h-full rounded-2xl bg-card border border-border/60 p-8 hover:border-border transition-all duration-300 hover:premium-shadow flex flex-col">
                <Quote className="w-8 h-8 text-primary/20 mb-6 flex-shrink-0" />
                <blockquote className="text-foreground/90 leading-relaxed mb-8 flex-1 text-[15px]">
                  "{t.quote}"
                </blockquote>
                <div className="border-t border-border pt-6">
                  <div className="font-heading font-semibold text-sm">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                  <div className="text-xs text-primary mt-1">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
