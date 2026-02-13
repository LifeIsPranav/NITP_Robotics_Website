import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Robotics Fest 2026',
    description: 'Join us for the biggest robotics event of the year featuring competitions, workshops, and exhibitions.',
    date: '15-17 March 2026',
    location: 'NIT Patna Campus',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop',
    category: 'Festival',
  },
  {
    id: 2,
    title: 'AI & Machine Learning Workshop',
    description: 'Hands-on workshop on implementing AI algorithms in robotics applications.',
    date: '25 February 2026',
    location: 'Lab Complex, Block A',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    category: 'Workshop',
  },
  {
    id: 3,
    title: 'Line Following Robot Competition',
    description: 'Test your skills in autonomous robot navigation and control systems.',
    date: '10 March 2026',
    location: 'Main Auditorium',
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800&auto=format&fit=crop',
    category: 'Competition',
  },
];

export function EventsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Upcoming <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on our exciting workshops, competitions, and tech talks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {event.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={16} className="mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin size={16} className="mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/events">
            <Button size="lg" variant="outline">
              View All Events
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
