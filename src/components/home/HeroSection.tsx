import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/0 to-purple-900/20" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Floating Orbs */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl -top-48 -left-48" />
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl -bottom-48 -right-48" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 backdrop-blur-sm bg-white/5 border border-white/10 px-5 py-2.5 rounded-full mb-8 shadow-2xl"
          >
            <Cpu className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Engineering Tomorrow's Solutions
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative inline-block"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
                <span className="block text-foreground mb-2">Robotics Club</span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    NIT Patna
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-full"
                  />
                </span>
              </h1>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Pioneering innovation in autonomous systems, artificial intelligence, and robotics. 
            We transform ideas into intelligent solutions that shape the future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link to="/projects">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white border-0 px-8 py-6 text-base font-medium shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Explore Projects
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link to="/team">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-base font-medium border-2 hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
              >
                Meet Our Team
              </Button>
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { number: '100+', label: 'Active Members', icon: Code2 },
              { number: '50+', label: 'Projects', icon: Cpu },
              { number: '25+', label: 'Awards', icon: Zap },
              { number: '10+', label: 'Years', icon: ArrowRight },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <stat.icon className="w-5 h-5 text-blue-400 mb-3 opacity-60" />
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground/70 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1.5 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-2 bg-gradient-to-b from-blue-400 to-transparent rounded-full mx-auto"
            />
          </div>
          <span className="text-xs text-muted-foreground/50 font-light">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
