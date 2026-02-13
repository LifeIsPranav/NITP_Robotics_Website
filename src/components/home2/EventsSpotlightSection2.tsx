import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const events = [
  {
    title: 'Annual Robotics Fest 2026',
    date: '15–17 March 2026',
    location: 'NIT Patna Campus',
    category: 'Festival',
    description: 'Three days of competitions, workshops, exhibitions, and keynotes from industry leaders.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80',
    featured: true,
  },
  {
    title: 'AI & ML Workshop Series',
    date: '25 Feb 2026',
    location: 'Lab Complex, Block A',
    category: 'Workshop',
    description: 'Hands-on implementation of computer vision and reinforcement learning in robotics.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    title: 'Line Follower Championship',
    date: '10 March 2026',
    location: 'Main Auditorium',
    category: 'Competition',
    description: 'Test your autonomous navigation skills. Open to all departments.',
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
];

export function EventsSpotlightSection2() {
  const featured = events.find((e) => e.featured);
  const rest = events.filter((e) => !e.featured);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-primary tracking-wide uppercase mb-4"
            >
              Upcoming Events
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl sm:text-5xl font-bold tracking-tight"
            >
              Don't miss what's next.
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link to="/events">
              <Button variant="outline" className="rounded-xl group">
                All events
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Featured + Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Featured Event — large */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 group"
            >
              <div className="relative rounded-2xl overflow-hidden h-full min-h-[400px] bg-card border border-border/60 hover:border-border transition-all duration-500 hover:premium-shadow-lg">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground w-fit mb-4">
                    {featured.category}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">{featured.title}</h3>
                  <p className="text-white/70 mb-4 max-w-lg">{featured.description}</p>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{featured.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{featured.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Side events */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {rest.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group flex-1"
              >
                <div className="rounded-2xl overflow-hidden h-full bg-card border border-border/60 hover:border-border transition-all duration-500 hover:premium-shadow-lg">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-background/80 dark:bg-background/60 backdrop-blur-sm text-foreground">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{event.date}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{event.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
