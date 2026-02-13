import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Award, Users, Rocket, BookOpen, TrendingUp, Heart, Lightbulb, Zap } from 'lucide-react';
import { useRef } from 'react';

const achievements = [
  { year: '2025', title: 'First Prize in National Robotics Competition', category: 'Competition', icon: Award },
  { year: '2024', title: 'Best Innovation Award at TechFest IIT Bombay', category: 'Innovation', icon: Lightbulb },
  { year: '2024', title: 'Winner - Autonomous Navigation Challenge', category: 'Technical', icon: Rocket },
  { year: '2023', title: 'Excellence in Research - IEEE Conference', category: 'Research', icon: BookOpen },
];

const milestones = [
  { year: '2015', event: 'Club Founded', description: 'Robotics Club established at NIT Patna', icon: Heart },
  { year: '2017', event: 'First National Competition', description: 'Participated in ABU Robocon', icon: Award },
  { year: '2019', event: '100+ Members', description: 'Reached milestone of 100 active members', icon: Users },
  { year: '2021', event: 'Research Lab', description: 'Dedicated robotics lab inaugurated', icon: Lightbulb },
  { year: '2023', event: 'International Recognition', description: 'Projects featured in IEEE publications', icon: TrendingUp },
  { year: '2025', event: 'AI Integration', description: 'Launched AI and ML focused initiatives', icon: Zap },
];

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'Pushing boundaries with creative solutions and cutting-edge technologies.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Building together through teamwork, knowledge sharing, and mutual support.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Rocket,
    title: 'Excellence',
    description: 'Pursuing mastery in robotics, automation, and artificial intelligence.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Heart,
    title: 'Community',
    description: 'Fostering an inclusive environment where everyone can learn and grow.',
    gradient: 'from-green-500 to-emerald-500'
  },
];

export function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={containerRef} className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="section-padding relative overflow-hidden"
      >
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
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Since 2015</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              Shaping the Future of{' '}
              <span className="text-gradient bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                Robotics & AI
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              A legacy of innovation, excellence, and technological advancement at NIT Patna's premier technical club
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {[
                { label: 'Members', value: '200+' },
                { label: 'Projects', value: '50+' },
                { label: 'Awards', value: '25+' },
                { label: 'Years', value: '10+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm font-semibold text-primary uppercase tracking-wider"
              >
                Our Journey
              </motion.span>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-6 leading-tight">
                From Humble Beginnings to Excellence
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2015, the Robotics Club of NIT Patna has evolved from a small group of passionate 
                  enthusiasts into one of the institution's most dynamic and innovative technical communities.
                </p>
                <p>
                  Our journey spans from basic line-following robots to sophisticated autonomous systems, 
                  artificial intelligence implementations, computer vision projects, and advanced control mechanisms. 
                  We've consistently pushed the boundaries of what's possible in robotics and automation.
                </p>
                <p>
                  Today, our alumni work with leading tech giants, research institutions, and startups worldwide, 
                  while our current members continue to innovate, compete, and inspire the next generation of 
                  robotics engineers.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop"
                  alt="Robotics Lab"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-3xl -z-10" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Core Values</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-muted-foreground">
              Our principles guide every project, event, and interaction within our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                >
                  <Card className="h-full border-2 hover:border-primary/30 transition-all duration-500 group hover:shadow-2xl hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="relative w-20 h-20 mb-6">
                        <div className="absolute inset-0 bg-foreground/5 dark:bg-foreground/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                        <div className="relative w-full h-full bg-gradient-to-br from-foreground/[0.08] to-foreground/[0.12] dark:from-foreground/[0.12] dark:to-foreground/[0.18] rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105 border border-foreground/[0.08]">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/10 dark:to-transparent rounded-3xl" />
                          <Icon size={32} className="text-foreground/70 dark:text-foreground/80 relative z-10" strokeWidth={2} />
                        </div>
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Card className="h-full border-2 hover:border-primary/30 transition-all duration-500 premium-shadow group">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-heading font-bold mb-6">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    To foster a culture of innovation, technical excellence, and collaborative learning in robotics 
                    and automation. We empower students with hands-on experience, cutting-edge knowledge, and the 
                    skills needed to become future leaders in technology.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Provide practical robotics education',
                      'Encourage research and innovation',
                      'Build industry-ready professionals',
                      'Create impactful technical solutions',
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-2 hover:border-primary/30 transition-all duration-500 premium-shadow group">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-heading font-bold mb-6">Our Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    To be a leading center of excellence in robotics and automation, recognized nationally and 
                    internationally for producing innovative solutions, groundbreaking research, and skilled 
                    professionals who shape the future of technology.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Pioneer advanced robotics research',
                      'Lead national competitions',
                      'Collaborate with global institutions',
                      'Transform ideas into reality',
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Journey</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-6">
              Our Milestones
            </h2>
            <p className="text-lg text-muted-foreground">
              A decade of achievements, growth, and technological excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Desktop: Horizontal Timeline */}
            <div className="hidden lg:block">
              {/* Top row - cards for even indices (0, 2, 4) */}
              <div className="grid grid-cols-6 gap-6 mb-6">
                {milestones.map((milestone, index) => {
                  const isTop = index % 2 === 0;
                  return (
                    <motion.div
                      key={`top-${milestone.year}`}
                      initial={{ opacity: 0, y: isTop ? -30 : 0 }}
                      whileInView={{ opacity: isTop ? 1 : 0, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
                      className={isTop ? '' : 'invisible'}
                    >
                      <Card className="border border-border/50 hover:border-primary/30 transition-all duration-500 group hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <span className="text-xl font-bold text-primary">{milestone.year}</span>
                          <h3 className="text-base font-heading font-semibold mt-2 mb-2 group-hover:text-primary transition-colors leading-snug">{milestone.event}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Connecting lines from top cards */}
              <div className="grid grid-cols-6 gap-6">
                {milestones.map((_, index) => (
                  <div key={`line-top-${index}`} className="flex justify-center">
                    {index % 2 === 0 ? (
                      <div className="w-px h-12 bg-gradient-to-b from-primary/30 to-primary/60" />
                    ) : (
                      <div className="h-12" />
                    )}
                  </div>
                ))}
              </div>

              {/* Middle row - horizontal line with icons */}
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent -translate-y-1/2" />
                <div className="grid grid-cols-6 gap-6">
                  {milestones.map((milestone, index) => {
                    const Icon = milestone.icon;
                    return (
                      <motion.div
                        key={`node-${milestone.year}`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        className="flex justify-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          transition={{ duration: 0.3 }}
                          className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/90 to-purple-600/90 flex items-center justify-center shadow-lg shadow-primary/25 ring-[3px] ring-background relative z-10"
                        >
                          <Icon size={22} className="text-white" strokeWidth={2} />
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Connecting lines to bottom cards */}
              <div className="grid grid-cols-6 gap-6">
                {milestones.map((_, index) => (
                  <div key={`line-bot-${index}`} className="flex justify-center">
                    {index % 2 !== 0 ? (
                      <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-primary/30" />
                    ) : (
                      <div className="h-12" />
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom row - cards for odd indices (1, 3, 5) */}
              <div className="grid grid-cols-6 gap-6 mt-0">
                {milestones.map((milestone, index) => {
                  const isBottom = index % 2 !== 0;
                  return (
                    <motion.div
                      key={`bot-${milestone.year}`}
                      initial={{ opacity: 0, y: isBottom ? 30 : 0 }}
                      whileInView={{ opacity: isBottom ? 1 : 0, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
                      className={isBottom ? '' : 'invisible'}
                    >
                      <Card className="border border-border/50 hover:border-primary/30 transition-all duration-500 group hover:shadow-xl hover:shadow-primary/5 hover:translate-y-1 bg-card/80 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <span className="text-xl font-bold text-primary">{milestone.year}</span>
                          <h3 className="text-base font-heading font-semibold mt-2 mb-2 group-hover:text-primary transition-colors leading-snug">{milestone.event}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile/Tablet: Vertical Timeline */}
            <div className="lg:hidden max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />
                
                <div className="space-y-10">
                  {milestones.map((milestone, index) => {
                    const Icon = milestone.icon;
                    return (
                      <motion.div
                        key={milestone.year}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                        className="relative flex gap-6 items-start"
                      >
                        <div className="flex-shrink-0 relative z-10">
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.3 }}
                            className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/90 to-purple-600/90 flex items-center justify-center shadow-lg shadow-primary/25 ring-[3px] ring-background"
                          >
                            <Icon size={18} className="text-white" strokeWidth={2} />
                          </motion.div>
                        </div>

                        <Card className="flex-1 border border-border/50 hover:border-primary/30 transition-all duration-500 group hover:shadow-xl hover:shadow-primary/5 bg-card/80 backdrop-blur-sm">
                          <CardContent className="p-6">
                            <span className="text-xl font-bold text-primary">{milestone.year}</span>
                            <h3 className="text-lg font-heading font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">{milestone.event}</h3>
                            <p className="text-base text-muted-foreground leading-relaxed">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Recognition</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-6">
              Recent Achievements
            </h2>
            <p className="text-lg text-muted-foreground">
              Celebrating our victories and recognitions in competitions and research
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const accentColors = [
                { 
                  gradient: 'from-[#667eea] to-[#764ba2]', 
                  bg: 'bg-[#667eea]/10', 
                  text: 'text-[#667eea]', 
                  border: 'hover:border-[#667eea]/30', 
                  shadow: 'hover:shadow-[#667eea]/10',
                  iconBg: 'bg-gradient-to-br from-[#667eea] to-[#764ba2]'
                },
                { 
                  gradient: 'from-[#f093fb] to-[#f5576c]', 
                  bg: 'bg-[#f093fb]/10', 
                  text: 'text-[#f093fb]', 
                  border: 'hover:border-[#f093fb]/30', 
                  shadow: 'hover:shadow-[#f093fb]/10',
                  iconBg: 'bg-gradient-to-br from-[#f093fb] to-[#f5576c]'
                },
                { 
                  gradient: 'from-[#4facfe] to-[#00f2fe]', 
                  bg: 'bg-[#4facfe]/10', 
                  text: 'text-[#4facfe]', 
                  border: 'hover:border-[#4facfe]/30', 
                  shadow: 'hover:shadow-[#4facfe]/10',
                  iconBg: 'bg-gradient-to-br from-[#4facfe] to-[#00f2fe]'
                },
                { 
                  gradient: 'from-[#fa709a] to-[#fee140]', 
                  bg: 'bg-[#fa709a]/10', 
                  text: 'text-[#fa709a]', 
                  border: 'hover:border-[#fa709a]/30', 
                  shadow: 'hover:shadow-[#fa709a]/10',
                  iconBg: 'bg-gradient-to-br from-[#fa709a] to-[#fee140]'
                },
              ];
              const color = accentColors[index % accentColors.length];
              return (
                <motion.div
                  key={achievement.year + achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
                >
                  <Card className={`h-full border border-border/50 ${color.border} transition-all duration-500 group hover:shadow-xl ${color.shadow} hover:-translate-y-1 bg-card/80 backdrop-blur-sm`}>
                    <CardContent className="p-7">
                      <div className="flex items-start gap-5">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <div className={`absolute inset-0 ${color.iconBg} rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`} />
                          <motion.div 
                            whileHover={{ scale: 1.08, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className={`relative w-full h-full ${color.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500`}
                          >
                            <div className="absolute inset-0 bg-white/[0.15] dark:bg-white/[0.08] rounded-2xl" />
                            <Icon size={26} className="text-white relative z-10" strokeWidth={2.2} />
                          </motion.div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <span className={`text-sm font-semibold ${color.text}`}>{achievement.year}</span>
                            <span className={`text-xs px-2.5 py-1 rounded-full ${color.bg} ${color.text} font-medium`}>
                              {achievement.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-heading font-semibold leading-snug group-hover:text-foreground/80 transition-colors">{achievement.title}</h3>
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
    </div>
  );
}
