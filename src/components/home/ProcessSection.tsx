import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Explore & Discover',
    description: 'Attend open workshops, hackathons, and orientation sessions. Find the domain that excites you — from embedded systems to machine learning.',
  },
  {
    number: '02',
    title: 'Learn & Build',
    description: 'Join a project team and start building. Senior mentors guide you through real engineering challenges with weekly sprints and code reviews.',
  },
  {
    number: '03',
    title: 'Compete & Publish',
    description: 'Represent NIT Patna at Robocon, Smart India Hackathon, and IEEE conferences. Turn your project into a competition entry or research paper.',
  },
  {
    number: '04',
    title: 'Lead & Mentor',
    description: 'As you grow, lead your own project team, mentor newcomers, and shape the club\'s direction. Your legacy lives through the people you teach.',
  },
];

export function ProcessSection() {
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
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Your journey with us.
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-2 z-10" />

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <span className="font-heading text-5xl font-bold text-primary/15 dark:text-primary/20 block mb-2">{step.number}</span>
                  <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
