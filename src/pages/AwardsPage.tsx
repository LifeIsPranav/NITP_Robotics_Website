import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Trophy, Medal, Star, Lightbulb, Rocket, BookOpen, Cpu, Globe, Zap } from 'lucide-react';

const categories = ['All', 'Competition', 'Innovation', 'Research', 'Technical'];

const awards = [
  {
    id: 1,
    title: 'First Prize — National Robotics Competition',
    description: 'Our team secured first place among 120+ teams from across India in the autonomous robot navigation challenge at NRC 2025.',
    year: '2025',
    category: 'Competition',
    icon: Trophy,
    color: 'text-amber-500 dark:text-amber-400',
    bg: 'bg-amber-500/10 dark:bg-amber-500/15',
    venue: 'IIT Delhi',
  },
  {
    id: 2,
    title: 'Best Innovation Award — TechFest IIT Bombay',
    description: 'Recognized for developing a novel swarm robotics algorithm that enables decentralized multi-robot coordination in disaster scenarios.',
    year: '2024',
    category: 'Innovation',
    icon: Lightbulb,
    color: 'text-violet-500 dark:text-violet-400',
    bg: 'bg-violet-500/10 dark:bg-violet-500/15',
    venue: 'IIT Bombay',
  },
  {
    id: 3,
    title: 'Winner — Autonomous Navigation Challenge',
    description: 'Our autonomous ground vehicle completed the most complex urban navigation course in record time with zero penalties.',
    year: '2024',
    category: 'Technical',
    icon: Rocket,
    color: 'text-blue-500 dark:text-blue-400',
    bg: 'bg-blue-500/10 dark:bg-blue-500/15',
    venue: 'NIT Trichy',
  },
  {
    id: 4,
    title: 'Excellence in Research — IEEE Conference',
    description: 'Paper on "Reinforcement Learning for Bipedal Locomotion" published and awarded Best Student Paper at IEEE ICRA.',
    year: '2023',
    category: 'Research',
    icon: BookOpen,
    color: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
    venue: 'IEEE ICRA, London',
  },
  {
    id: 5,
    title: 'Gold Medal — ABU Robocon India',
    description: 'Designed and built a theme-based robot that outperformed participants from 25+ institutions in the national round.',
    year: '2023',
    category: 'Competition',
    icon: Medal,
    color: 'text-amber-500 dark:text-amber-400',
    bg: 'bg-amber-500/10 dark:bg-amber-500/15',
    venue: 'MIT Pune',
  },
  {
    id: 6,
    title: 'Smart India Hackathon — Grand Finalist',
    description: 'Our IoT-based agricultural monitoring system was selected among the top 10 solutions nationwide in the hardware edition.',
    year: '2023',
    category: 'Innovation',
    icon: Cpu,
    color: 'text-violet-500 dark:text-violet-400',
    bg: 'bg-violet-500/10 dark:bg-violet-500/15',
    venue: 'SIH 2023, Bhopal',
  },
  {
    id: 7,
    title: 'Best Technical Paper — IROS Workshop',
    description: 'Research on visual SLAM for indoor drones presented at the International Conference on Intelligent Robots and Systems.',
    year: '2022',
    category: 'Research',
    icon: Globe,
    color: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
    venue: 'IROS, Kyoto',
  },
  {
    id: 8,
    title: 'Winner — Drone Racing Championship',
    description: 'Our custom FPV racing drone finished first in the inter-college drone racing championship with the fastest lap time.',
    year: '2022',
    category: 'Technical',
    icon: Zap,
    color: 'text-blue-500 dark:text-blue-400',
    bg: 'bg-blue-500/10 dark:bg-blue-500/15',
    venue: 'IIT Kanpur',
  },
];

const stats = [
  { label: 'Awards Won', value: '25+', icon: Trophy },
  { label: 'Competitions', value: '40+', icon: Medal },
  { label: 'Research Papers', value: '15+', icon: BookOpen },
  { label: 'Hackathon Wins', value: '10+', icon: Star },
];

export function AwardsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAwards = selectedCategory === 'All'
    ? awards
    : awards.filter((a) => a.category === selectedCategory);

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
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Achievements & Recognition</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              Our{' '}
              <span className="text-gradient bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                Awards
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              A track record of excellence in competitions, research, and innovation on the national and international stage
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="glass rounded-2xl p-6"
                  >
                    <Icon className="w-6 h-6 text-primary mb-2 mx-auto" />
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredAwards.map((award, index) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                  layout
                >
                  <Card className="h-full border border-border/50 hover:border-primary/30 transition-all duration-500 group hover:shadow-xl hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-7">
                      <div className="flex items-start gap-5">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${award.bg} flex-shrink-0`}>
                          <Icon className={`w-6 h-6 ${award.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <span className={`text-sm font-semibold ${award.color}`}>{award.year}</span>
                            <span className={`text-xs px-2.5 py-1 rounded-full ${award.bg} ${award.color} font-medium`}>
                              {award.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-heading font-semibold leading-snug mb-2 group-hover:text-foreground/80 transition-colors">
                            {award.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                            {award.description}
                          </p>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground/70">
                            <Award className="w-3.5 h-3.5" />
                            <span>{award.venue}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Year by Year</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-6">
              Our Journey of Excellence
            </h2>
            <p className="text-lg text-muted-foreground">
              A growing legacy of achievements that showcase our team's dedication and talent
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {['2025', '2024', '2023', '2022'].map((year, yearIndex) => {
              const yearAwards = awards.filter((a) => a.year === year);
              return (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: yearIndex * 0.15, ease: 'easeOut' }}
                  className={`relative mb-12 last:mb-0 ${yearIndex % 2 === 0 ? 'sm:pr-[calc(50%+2rem)]' : 'sm:pl-[calc(50%+2rem)]'} pl-16 sm:pl-0`}
                >
                  {/* Year badge on the line */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 -top-1 z-10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{year}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mt-2">
                    {yearAwards.map((award) => {
                      const Icon = award.icon;
                      return (
                        <Card key={award.id} className="border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg bg-card/80 backdrop-blur-sm">
                          <CardContent className="p-5">
                            <div className="flex items-start gap-4">
                              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${award.bg} flex-shrink-0`}>
                                <Icon className={`w-5 h-5 ${award.color}`} />
                              </div>
                              <div>
                                <h3 className="font-heading font-semibold text-sm leading-snug mb-1">{award.title}</h3>
                                <p className="text-xs text-muted-foreground">{award.venue}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
