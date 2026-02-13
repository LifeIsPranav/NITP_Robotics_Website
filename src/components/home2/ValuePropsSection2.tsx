import { motion } from 'framer-motion';
import { Cpu, Users, Lightbulb, Wrench } from 'lucide-react';

const props = [
  {
    icon: Cpu,
    title: 'Hands-on Building',
    description: 'From PCB design to mechanical assembly — we build real robots, not just simulations.',
    color: 'text-blue-500 dark:text-blue-400',
    bg: 'bg-blue-500/10 dark:bg-blue-500/15',
  },
  {
    icon: Users,
    title: 'Peer-led Learning',
    description: 'Seniors mentor juniors through structured workshops, code reviews, and project sprints.',
    color: 'text-violet-500 dark:text-violet-400',
    bg: 'bg-violet-500/10 dark:bg-violet-500/15',
  },
  {
    icon: Lightbulb,
    title: 'Research-driven',
    description: 'We publish papers, file patents, and collaborate with faculty on funded research projects.',
    color: 'text-amber-500 dark:text-amber-400',
    bg: 'bg-amber-500/10 dark:bg-amber-500/15',
  },
  {
    icon: Wrench,
    title: 'Industry-ready Skills',
    description: 'Members intern at DRDO, ISRO, and top startups — our alumni work at the cutting edge.',
    color: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
  },
];

export function ValuePropsSection2() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-primary tracking-wide uppercase mb-4"
          >
            Why Join Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-6"
          >
            More than a club —{' '}
            <span className="text-muted-foreground">a launchpad.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            We're a tight-knit engineering collective that combines rigorous technical practice with a culture of curiosity and collaboration.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {props.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="group relative h-full rounded-2xl bg-card border border-border/60 p-8 transition-all duration-300 hover:border-border hover:premium-shadow-lg">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.bg} mb-6`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
