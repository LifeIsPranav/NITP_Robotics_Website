import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const teamData = {
  pi: {
    name: 'Dr. Rajesh Kumar',
    role: 'Professor In-charge',
    department: 'Department of Electrical Engineering',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop',
    bio: 'Leading research in robotics and automation with 15+ years of experience',
    email: 'rajesh.kumar@nitp.ac.in',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  executives: [
    {
      name: 'Arjun Sharma',
      role: 'President',
      year: 'Final Year, CSE',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop',
      bio: 'Leading the club with a vision for innovation',
      email: 'arjun@student.nitp.ac.in',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Priya Singh',
      role: 'Vice President',
      year: 'Final Year, ECE',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop',
      bio: 'Passionate about AI and embedded systems',
      email: 'priya@student.nitp.ac.in',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Rahul Verma',
      role: 'Secretary',
      year: 'Third Year, EE',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop',
      bio: 'Managing operations and coordinating events',
      email: 'rahul@student.nitp.ac.in',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Sneha Patel',
      role: 'Treasurer',
      year: 'Third Year, ME',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop',
      bio: 'Ensuring smooth financial management',
      email: 'sneha@student.nitp.ac.in',
      social: {
        github: '#',
        linkedin: '#',
      },
    },
  ],
  coreTeam: [
    {
      name: 'Amit Kumar',
      role: 'Technical Lead',
      year: 'Third Year, CSE',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop',
      domain: 'AI & ML',
    },
    {
      name: 'Ananya Gupta',
      role: 'Events Coordinator',
      year: 'Third Year, ECE',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop',
      domain: 'Management',
    },
    {
      name: 'Vikram Singh',
      role: 'Design Lead',
      year: 'Second Year, ME',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&auto=format&fit=crop',
      domain: 'CAD & Design',
    },
    {
      name: 'Riya Sharma',
      role: 'PR & Marketing',
      year: 'Third Year, CSE',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop',
      domain: 'Communications',
    },
    {
      name: 'Karan Malhotra',
      role: 'Web Developer',
      year: 'Second Year, IT',
      image: 'https://images.unsplash.com/photo-1502767089025-6572583495f9?w=400&auto=format&fit=crop',
      domain: 'Web Development',
    },
    {
      name: 'Divya Reddy',
      role: 'Hardware Lead',
      year: 'Third Year, EE',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop',
      domain: 'Electronics',
    },
  ],
  members: [
    { name: 'Aditya Raj', year: 'Second Year, CSE', domain: 'Software' },
    { name: 'Neha Jain', year: 'Second Year, ECE', domain: 'Hardware' },
    { name: 'Sarthak Gupta', year: 'Second Year, ME', domain: 'Mechanical' },
    { name: 'Pooja Iyer', year: 'First Year, CSE', domain: 'AI/ML' },
    { name: 'Rohan Das', year: 'Second Year, EE', domain: 'Control Systems' },
    { name: 'Ishita Kapoor', year: 'First Year, IT', domain: 'Web Dev' },
    { name: 'Varun Nair', year: 'Second Year, CSE', domain: 'Computer Vision' },
    { name: 'Megha Pandey', year: 'First Year, ECE', domain: 'IoT' },
  ],
};

export function TeamPage() {
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              Meet Our{' '}
              <span className="text-gradient bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              The brilliant minds driving innovation and excellence in robotics at NIT Patna
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professor In-charge */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Leadership</span>
            <h2 className="text-4xl font-heading font-bold mt-2 mb-2">Faculty Advisor</h2>
            <p className="text-lg text-muted-foreground">Guiding our journey towards excellence</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden group border-2 hover:border-primary/30 premium-shadow relative">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Floating orbs */}
              <motion.div 
                className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <CardContent className="p-0 relative z-10">
                <div className="md:flex">
                  <motion.div 
                    className="md:w-2/5 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.img
                      src={teamData.pi.image}
                      alt={teamData.pi.name}
                      className="w-full h-full object-cover min-h-[400px]"
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    
                    {/* Animated border shine */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      initial={false}
                      animate={{
                        background: [
                          'linear-gradient(0deg, transparent 0%, rgba(var(--primary-rgb), 0.2) 50%, transparent 100%)',
                          'linear-gradient(180deg, transparent 0%, rgba(var(--primary-rgb), 0.2) 50%, transparent 100%)',
                          'linear-gradient(0deg, transparent 0%, rgba(var(--primary-rgb), 0.2) 50%, transparent 100%)',
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="p-10 md:w-3/5 relative"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h3 className="text-3xl font-heading font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">{teamData.pi.name}</h3>
                    </motion.div>
                    
                    <motion.p 
                      className="text-primary font-semibold text-lg mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {teamData.pi.role}
                    </motion.p>
                    
                    <motion.p 
                      className="text-sm text-muted-foreground mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {teamData.pi.department}
                    </motion.p>
                    
                    <motion.p 
                      className="text-muted-foreground text-lg mb-8 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {teamData.pi.bio}
                    </motion.p>
                    
                    <motion.div 
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <motion.a 
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                        href={`mailto:${teamData.pi.email}`} 
                        className="p-3 rounded-xl bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
                      >
                        <Mail size={20} />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        href={teamData.pi.social.linkedin} 
                        className="p-3 rounded-xl bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
                      >
                        <Linkedin size={20} />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                        href={teamData.pi.social.twitter} 
                        className="p-3 rounded-xl bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
                      >
                        <Twitter size={20} />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Student Leaders</span>
            <h2 className="text-4xl font-heading font-bold mt-2 mb-2">Executive Committee</h2>
            <p className="text-lg text-muted-foreground">Leading with vision and dedication</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.executives.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 h-full hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 flex justify-center gap-2">
                      {member.social.github && (
                        <motion.a 
                          whileHover={{ scale: 1.15 }}
                          href={member.social.github} 
                          className="p-2.5 rounded-xl glass hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          <Github size={18} />
                        </motion.a>
                      )}
                      {member.social.linkedin && (
                        <motion.a 
                          whileHover={{ scale: 1.15 }}
                          href={member.social.linkedin} 
                          className="p-2.5 rounded-xl glass hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          <Linkedin size={18} />
                        </motion.a>
                      )}
                      {member.social.twitter && (
                        <motion.a 
                          whileHover={{ scale: 1.15 }}
                          href={member.social.twitter} 
                          className="p-2.5 rounded-xl glass hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          <Twitter size={18} />
                        </motion.a>
                      )}
                      <motion.a 
                        whileHover={{ scale: 1.15 }}
                        href={`mailto:${member.email}`} 
                        className="p-2.5 rounded-xl glass hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Mail size={18} />
                      </motion.a>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-1">{member.role}</p>
                    <p className="text-xs text-muted-foreground mb-4">{member.year}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Core Members</span>
            <h2 className="text-4xl font-heading font-bold mt-2 mb-2">Core Team</h2>
            <p className="text-lg text-muted-foreground">Driving technical excellence and innovation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamData.coreTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/30 group hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="flex items-center p-6 gap-5">
                      <div className="relative flex-shrink-0">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 rounded-2xl object-cover border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-300"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-bold text-lg mb-1 group-hover:text-primary transition-colors truncate">{member.name}</h3>
                        <p className="text-primary text-sm font-semibold mb-1">{member.role}</p>
                        <p className="text-xs text-muted-foreground mb-2">{member.year}</p>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                          {member.domain}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Community</span>
            <h2 className="text-4xl font-heading font-bold mt-2 mb-2">Active Members</h2>
            <p className="text-lg text-muted-foreground">Building the future, one project at a time</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {teamData.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary/30 group hover:-translate-y-1">
                  <CardContent className="p-5 text-center">
                    <h3 className="font-heading font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{member.year}</p>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {member.domain}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
