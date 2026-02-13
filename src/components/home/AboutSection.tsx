import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Users, Trophy, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'Pushing boundaries with cutting-edge robotics and AI technology',
  },
  {
    icon: Users,
    title: 'Collaborative Learning',
    description: 'Learn together, grow together, build the future together',
  },
  {
    icon: Trophy,
    title: 'Award Winning',
    description: 'Recognition in national and international competitions',
  },
  {
    icon: Target,
    title: 'Industry Focus',
    description: 'Projects aligned with real-world industry challenges',
  },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Empowering <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tomorrow's</span> Innovators
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              The Robotics Club of NIT Patna is a community of passionate students, researchers, and innovators 
              dedicated to exploring the frontiers of robotics, artificial intelligence, and automation.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Since our inception, we've been fostering a culture of innovation, creativity, and technical excellence. 
              Our members work on cutting-edge projects, participate in national competitions, and contribute to 
              advancing robotics technology.
            </p>
            <Link to="/about">
              <Button size="lg" className="group">
                Learn More About Us
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card border-2 border-border hover:border-primary/50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
