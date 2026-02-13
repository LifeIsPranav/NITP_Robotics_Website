import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'AI/ML', 'Autonomous', 'IoT', 'Computer Vision', 'Robotics'];

const projects = [
  {
    id: 1,
    title: 'Autonomous Drone Navigation',
    description: 'AI-powered drone with real-time obstacle detection, path planning, and autonomous navigation using deep learning and computer vision.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&auto=format&fit=crop',
    category: 'Autonomous',
    tags: ['AI', 'Computer Vision', 'ROS', 'Python'],
    github: '#',
    demo: '#',
    status: 'Completed',
    featured: true,
  },
  {
    id: 2,
    title: 'Smart Robotic Arm with ML',
    description: '6-DOF robotic arm featuring precision control, machine learning for object recognition, and adaptive grasping mechanisms.',
    image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&auto=format&fit=crop',
    category: 'Robotics',
    tags: ['Machine Learning', 'Control Systems', 'Arduino'],
    github: '#',
    demo: '#',
    status: 'Completed',
    featured: true,
  },
  {
    id: 3,
    title: 'Swarm Robotics System',
    description: 'Multi-robot coordination system using swarm intelligence algorithms for collaborative task execution and formation control.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop',
    category: 'Autonomous',
    tags: ['Swarm Intelligence', 'Communication', 'Simulation'],
    github: '#',
    status: 'Ongoing',
  },
  {
    id: 4,
    title: 'Face Recognition Security System',
    description: 'Real-time face detection and recognition system for access control using deep learning and edge computing.',
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&auto=format&fit=crop',
    category: 'Computer Vision',
    tags: ['Deep Learning', 'OpenCV', 'TensorFlow'],
    github: '#',
    demo: '#',
    status: 'Completed',
  },
  {
    id: 5,
    title: 'IoT Home Automation',
    description: 'Smart home system with voice control, sensor integration, and mobile app for remote monitoring and control.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop',
    category: 'IoT',
    tags: ['IoT', 'ESP32', 'Mobile App', 'Voice Control'],
    github: '#',
    status: 'Completed',
  },
  {
    id: 6,
    title: 'Line Following Robot',
    description: 'Autonomous mobile robot with PID control for line following and ultrasonic sensors for obstacle detection.',
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800&auto=format&fit=crop',
    category: 'Robotics',
    tags: ['PID Control', 'Sensors', 'Embedded Systems'],
    github: '#',
    status: 'Completed',
  },
  {
    id: 7,
    title: 'Gesture Controlled Robot',
    description: 'Robot controlled by hand gestures using computer vision and accelerometer data for intuitive human-robot interaction.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop',
    category: 'Computer Vision',
    tags: ['Gesture Recognition', 'ML', 'Wireless Control'],
    github: '#',
    demo: '#',
    status: 'Ongoing',
  },
  {
    id: 8,
    title: 'Chatbot with NLP',
    description: 'Intelligent chatbot for club queries using natural language processing and machine learning.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    category: 'AI/ML',
    tags: ['NLP', 'Python', 'Deep Learning', 'API'],
    github: '#',
    demo: '#',
    status: 'Completed',
  },
];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter(p => p.featured);

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
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Innovation Showcase</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              Our{' '}
              <span className="text-gradient bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of innovative robotics, AI, and automation projects built by talented students
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Featured Work</span>
              <h2 className="text-4xl font-heading font-bold mt-2">Spotlight Projects</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                >
                  <Card className="group h-full border-2 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-2xl">
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          project.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <div className="mb-3">
                        <span className="text-sm font-medium text-primary">{project.category}</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        {project.github && (
                          <Button variant="outline" size="sm" className="flex-1 rounded-xl group/btn">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        )}
                        {project.demo && (
                          <Button size="sm" className="flex-1 rounded-xl group/btn">
                            View Demo
                            <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        )}
                      </div>
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

          {/* All Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="group h-full border-2 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-xl hover:-translate-y-1">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60" />
                      <div className="absolute top-3 right-3">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          project.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2">
                        <span className="text-xs font-medium text-primary">{project.category}</span>
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <Button variant="outline" size="sm" className="flex-1 rounded-lg">
                            <Github className="w-3.5 h-3.5" />
                          </Button>
                        )}
                        {project.demo && (
                          <Button size="sm" className="flex-1 rounded-lg group/btn">
                            Demo
                            <ExternalLink className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-purple-500/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our team and bring your innovative ideas to life with cutting-edge technology
            </p>
            <Link to="/contact">
              <Button size="lg" className="px-8 py-3.5 text-base font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 group">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
