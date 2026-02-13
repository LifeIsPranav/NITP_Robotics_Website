import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    id: 1,
    title: 'Autonomous Drone Navigation System',
    description: 'AI-powered drone with real-time obstacle detection and path planning using computer vision.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&auto=format&fit=crop',
    tags: ['AI', 'Computer Vision', 'IoT'],
    github: '#',
  },
  {
    id: 2,
    title: 'Smart Robotic Arm',
    description: '6-DOF robotic arm with precision control and machine learning for object manipulation.',
    image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&auto=format&fit=crop',
    tags: ['Robotics', 'ML', 'Control Systems'],
    github: '#',
  },
  {
    id: 3,
    title: 'Swarm Robotics System',
    description: 'Coordinated multi-robot system for collaborative tasks using swarm intelligence algorithms.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop',
    tags: ['Swarm', 'Algorithm', 'Coordination'],
    github: '#',
  },
];

export function ProjectsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our innovative projects pushing the boundaries of robotics and AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                    <Button size="sm" variant="secondary" className="flex-1">
                      <ExternalLink size={14} className="mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Github size={14} />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
          <Link to="/projects">
            <Button size="lg">
              Explore All Projects
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
