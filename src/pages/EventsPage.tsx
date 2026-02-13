import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Workshop', 'Competition', 'Seminar', 'Fest'];

const events = [
  {
    id: 1,
    title: 'Annual Robotics Fest 2026',
    description: 'Three-day extravaganza featuring competitions, workshops, exhibitions, and tech talks from industry experts.',
    date: '15-17 March 2026',
    time: '9:00 AM - 6:00 PM',
    location: 'NIT Patna Main Campus',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop',
    category: 'Fest',
    capacity: '500+',
    status: 'Upcoming',
    registrationOpen: true,
    featured: true,
  },
  {
    id: 2,
    title: 'AI & Machine Learning Workshop',
    description: 'Hands-on workshop covering neural networks, computer vision, and implementing AI in robotics applications.',
    date: '25 February 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'Lab Complex, Block A',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    category: 'Workshop',
    capacity: '50',
    status: 'Upcoming',
    registrationOpen: true,
    featured: true,
  },
  {
    id: 3,
    title: 'Line Following Robot Competition',
    description: 'Test your autonomous navigation skills in this exciting competition with cash prizes and certificates.',
    date: '10 March 2026',
    time: '11:00 AM - 5:00 PM',
    location: 'Main Auditorium',
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800&auto=format&fit=crop',
    category: 'Competition',
    capacity: '30 Teams',
    status: 'Upcoming',
    registrationOpen: true,
  },
  {
    id: 4,
    title: 'ROS (Robot Operating System) Bootcamp',
    description: 'Intensive 3-day bootcamp on ROS fundamentals, navigation stack, and autonomous robot development.',
    date: '20-22 February 2026',
    time: '9:00 AM - 5:00 PM',
    location: 'Robotics Lab',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop',
    category: 'Workshop',
    capacity: '40',
    status: 'Upcoming',
    registrationOpen: true,
  },
  {
    id: 5,
    title: 'Tech Talk: Future of Robotics',
    description: 'Guest lecture by Dr. Ankit Sharma from IIT Delhi on emerging trends in robotics and automation.',
    date: '5 March 2026',
    time: '4:00 PM - 6:00 PM',
    location: 'Auditorium Hall',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop',
    category: 'Seminar',
    capacity: '200',
    status: 'Upcoming',
    registrationOpen: true,
  },
  {
    id: 6,
    title: 'Arduino & IoT Workshop',
    description: 'Learn embedded systems programming, sensor integration, and build your own IoT projects.',
    date: '18 January 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'Lab Complex, Block B',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop',
    category: 'Workshop',
    capacity: '60',
    status: 'Completed',
    registrationOpen: false,
  },
];

export function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents = selectedCategory === 'All'
    ? events
    : events.filter((event) => event.category === selectedCategory);

  const upcomingEvents = filteredEvents.filter(e => e.status === 'Upcoming');
  const pastEvents = filteredEvents.filter(e => e.status === 'Completed');
  const featuredEvents = events.filter(e => e.featured);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
        <div className="absolute top-20 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Year-Round Activities</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              Upcoming{' '}
              <span className="text-gradient bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us for workshops, competitions, seminars, and tech festivals throughout the year
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Don't Miss Out</span>
              <h2 className="text-4xl font-heading font-bold mt-2">Featured Events</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                >
                  <Card className="group h-full border-2 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-2xl">
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                      {event.registrationOpen && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Open for Registration
                          </span>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-8">
                      <div className="mb-3">
                        <span className="text-sm font-medium text-primary">{event.category}</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {event.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{event.capacity} participants</span>
                        </div>
                      </div>
                      {event.registrationOpen && (
                        <Link to="/contact">
                          <Button size="lg" className="w-full rounded-xl group/btn">
                            Register Now
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 flex-wrap mb-12"
          >
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full px-6 transition-all duration-300"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Upcoming Events */}
          {upcomingEvents.length > 0 && (
            <>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-heading font-bold mb-8"
              >
                Upcoming Events
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card className="group h-full border-2 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-xl hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60" />
                        {event.registrationOpen && (
                          <div className="absolute top-3 right-3">
                            <span className="px-2 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm">
                              Open
                            </span>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-2">
                          <span className="text-xs font-medium text-primary">{event.category}</span>
                        </div>
                        <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {event.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-xs">
                            <Calendar className="w-3.5 h-3.5 text-primary" />
                            <span className="text-muted-foreground">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <MapPin className="w-3.5 h-3.5 text-primary" />
                            <span className="text-muted-foreground">{event.location}</span>
                          </div>
                        </div>
                        {event.registrationOpen && (
                          <Link to="/contact">
                            <Button size="sm" className="w-full rounded-lg group/btn">
                              Register
                              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                            </Button>
                          </Link>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* Past Events */}
          {pastEvents.length > 0 && (
            <>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-heading font-bold mb-8"
              >
                Past Events
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card className="group h-full border-2 hover:border-border transition-all duration-500 overflow-hidden opacity-75">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-1 rounded-full text-xs font-bold bg-muted text-muted-foreground">
                            Completed
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-2">
                          <span className="text-xs font-medium text-muted-foreground">{event.category}</span>
                        </div>
                        <h3 className="text-lg font-heading font-bold mb-2 line-clamp-2">
                          {event.title}
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs">
                            <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                            <span className="text-muted-foreground">{event.date}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
